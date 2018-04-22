import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, TouchableOpacity, Text, Button } from 'react-native';
import styles from './styles';

const NAME_PLACEHOLDER = 'Enter your name';
const USERNAME_PLACEHOLDER = 'Enter your display name';
const JOBTITLE_PLACEHOLDER = 'Enter your job title';

// This will be replaced with actual upload
const AVATARURL_PLACEHOLDER = 'Enter the url to your avatar'

const PLACEHOLDER_COLOR = "#999";

class Profile extends Component {
    static propTypes = {
        handleProfileUpdate: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            jobTitle: '',
            avatar: ''
        };
    }

    handleNameChange = (name) => {
        this.setState({name});
    }

    handleUsernameChange = (username) => {
        this.setState({username});
    }

    handleJobTitleChange = (jobTitle) => {
        this.setState({jobTitle});
    }

    handleAvatarChange = (avatar) => {
        this.setState({avatar});
    }

    handleProfileUpdate = () => {
        this.props.handleProfileUpdate({
            name: this.state.name,
            username: this.state.username,
            jobTitle: this.state.jobTitle,
            avatar: this.state.avatar
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={NAME_PLACEHOLDER}
                        placeholderTextColor={PLACEHOLDER_COLOR}
                        selectionColor={PLACEHOLDER_COLOR}
                        onChangeText={this.handleNameChange}
                        underlineColorAndroid="transparent"/>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={USERNAME_PLACEHOLDER}
                        placeholderTextColor={PLACEHOLDER_COLOR}
                        selectionColor={PLACEHOLDER_COLOR}
                        onChangeText={this.handleUsernameChange}
                        underlineColorAndroid="transparent"/>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Job Title</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={JOBTITLE_PLACEHOLDER}
                        placeholderTextColor={PLACEHOLDER_COLOR}
                        selectionColor={PLACEHOLDER_COLOR}
                        onChangeText={this.handleJobTitleChange}
                        underlineColorAndroid="transparent"/>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Avatar URL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={AVATARURL_PLACEHOLDER}
                        placeholderTextColor={PLACEHOLDER_COLOR}
                        selectionColor={PLACEHOLDER_COLOR}
                        onChangeText={this.handleAvatarChange}
                        underlineColorAndroid="transparent"/>
                </View>

                
                <View style={styles.formButton}>
                    <TouchableOpacity onPress={this.handleProfileUpdate}>
                        <Text style={styles.buttonText}>Update Profile</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}

export default Profile;