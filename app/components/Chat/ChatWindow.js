import React, { Component } from 'react';
import { View, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';

import ChatBubble from './ChatBubble';
import styles from './styles';

const PLACEHOLDER_COLOR = "#999";

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    displayMessages = () => {
        return this.props.messages.map((message) => {
            let displayRight = undefined;
            if (message.sender === this.props.authenticatedUser.uid) {
                displayRight = true;
            }
            return <ChatBubble displayRight={displayRight} key={message.id} message={message}/>
        });
    }

    sendMessage = () => {
        this.props.handleMessageSend(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{paddingHorizontal: 10, paddingVertical: 12}}>
                    {this.displayMessages()}
                </ScrollView>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.inputContainer}>
                        <TextInput
                            value={this.state.text}
                            style={styles.input}
                            placeholder="Enter a message"
                            placeholderTextColor={PLACEHOLDER_COLOR}
                            selectionColor={PLACEHOLDER_COLOR}
                            underlineColorAndroid="transparent"
                            onChangeText={(text) => this.setState({text})}
                            onSubmitEditing={this.sendMessage}
                            returnKeyType="send"
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default ChatWindow;