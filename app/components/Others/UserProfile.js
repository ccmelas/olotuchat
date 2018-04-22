import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class UserProfile extends Component {
    render() {
        const {user} = this.props;
        return (
            <View>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image style={styles.image} source={{uri: user.avatar}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.username}>( {user.username} )</Text>
                    <Text style={styles.jobTitle}>{user.jobTitle}</Text>
                </View>
            </View>
        );
    }
}

export default UserProfile;