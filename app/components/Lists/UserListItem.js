import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import styles from './styles';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#777';
const ICON_SIZE = 23;

class UserListItem extends Component {
    onTouchImage = () => {
        this.props.onTouchImage(this.props.user);
    }

    onTouchChatBubble = () => {
        this.props.onTouchChatBubble(this.props.user);
    }

    onTouchName = () => {
        this.props.onTouchName(this.props.user);
    }

    render() {
        const {username, jobTitle, avatar} = this.props.user;

        return (
            
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onTouchImage}>
                    <Image style={styles.image} 
                        source={{uri: avatar}} 
                        />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={this.onTouchName}>
                        <Text style={styles.headerText}>{username}</Text>
                        <Text style={styles.jobText}>{jobTitle}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.onTouchChatBubble}>
                    <View style={styles.chatBubble}>
                        <Ionicons name={`${ICON_PREFIX}-chatbubbles`} color={ICON_COLOR} size={ICON_SIZE}/>
                    </View>
                </TouchableOpacity>
            </View>
            
        );
    }
}

export default UserListItem;