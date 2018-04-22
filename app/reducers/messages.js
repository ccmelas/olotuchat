import * as actions from './../actions/messages';

import messages from './../data/messages';

const initialState = {
    chats: {
        
    },
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.SEND_MESSAGE:
            return {
                ...state,
                chats : {
                    ...state.chats,
                    [action.chatId]: {
                        ...state.chats[action.chatId],
                        ...action.message
                    }
                }
            };
        
        case actions.LOAD_MESSAGES:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    [action.friend]: {
                        chatId: action.chatId,
                        messages: action.messages
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;

