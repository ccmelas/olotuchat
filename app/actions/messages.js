import * as api from './../api';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';

export const sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        message
    };
};

export const loadMessages = (chatId, friend, messages) => {
    return {
        type: LOAD_MESSAGES,
        messages,
        friend,
        chatId
    };
};

export const startSendMessage = (chatId, message, successCB, errorCB) => {
    return (dispatch) => {
        api.sendMessage(chatId, message, function (success, data, error) {
            if (success) {
                //message.id = data;
                //dispatch({type: SEND_MESSAGE, message});
                successCB();
            } else if (error) errorCB(error)
        });
    };
};

export const startLoadMessages = () => {
    return (dispatch) => {
        api.getMessages();
    };
}

export const startConversation = (message) => {
    return (dispatch) => {
        api.startConversation(message);
    }
}

export const subscribeToChats = (user) => {
    return (dispatch) => {
        api.chatSubscription(user, (data) => {
            if (data) {
                let chatIds = Object.keys(data);
                chatIds.forEach(chatId => {
                    dispatch(subscribeToChatMessages(chatId, data[chatId]));
                });
            }
        });
    };
}

export const subscribeToChatMessages = (chatId, friend) => {
    return (dispatch) => {
        api.chatMessageSubscription(chatId, (messages) => {
            if (messages) {
                let keys = Object.keys(messages);
                let messageArray = keys.map(key => {
                    let message = messages[key];
                    message.id = key;
                    return message;
                });
                dispatch(loadMessages(chatId, friend, messageArray));
            }
        });
    };
}