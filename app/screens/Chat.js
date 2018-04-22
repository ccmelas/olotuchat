import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {startConversation, startSendMessage} from './../actions/messages';

import { Container } from './../components/Containers';
import { ChatWindow } from './../components/Chat';

class Chat extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        chats: PropTypes.object,
        authenticatedUser: PropTypes.object
    };

    onMessageSendSuccess = () => {
        console.log('Message sent');
    }

    onMessageSendError(error) {
        console.log('Message error', error);
    }

    sendMessage = (text) => {
        let message = {
            message: text,
            sender: this.props.authenticatedUser.uid,
            receiver: this.props.navigation.state.params.user.uid,
            time: Date.now()
        };
        const {user} = this.props.navigation.state.params;
        const {chats} = this.props;
        const chat = chats[user.uid];
        if (chat) {
            this.props.dispatch(
                startSendMessage(chat.chatId, message, this.onMessageSendSuccess, this.onMessageSendError)
            );   
        } else {
            this.props.dispatch(startConversation(message));
        }
    }

    render() {
        const {authenticatedUser} = this.props;
        const {user} = this.props.navigation.state.params;
        const {chats} = this.props;
        const chat = chats[user.uid];
        let messages = [];
        if (chat) {
            messages = chat.messages
        }
        
        return (
            <Container>
                <ChatWindow 
                    authenticatedUser={authenticatedUser} 
                    messages={messages.sort((a, b) => a.time > b.time)}
                    handleMessageSend={this.sendMessage}/>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        chats: state.messages.chats,
        authenticatedUser: state.authentication.authenticatedUser
    }
};

export default connect(mapStateToProps)(Chat);