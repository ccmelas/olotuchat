import React, { Component } from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

class ChatBubble extends Component {
    render() {
        const {message, time} = this.props.message;

        const containerStyles = [styles.chatBubbleContainer];
        
        if(this.props.displayRight) {
            containerStyles.push({flexDirection: 'row-reverse'});
        }

        return (
            <View style={containerStyles}>
                <View style={styles.chatBubble}>
                    <Text style={styles.message}>
                        {message}
                    </Text>
                    <Text style={styles.time}>{moment(new Date(time)).fromNow()}</Text>
                </View>
            </View>
        );
    }
}

export default ChatBubble;