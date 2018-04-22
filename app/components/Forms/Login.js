import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, TouchableOpacity, Text, Button, ActivityIndicator } from 'react-native';
import styles from './styles';

const PASSWORD_PLACEHOLDER = 'Enter your passkey';
const EMAIL_PLACEHOLDER = 'Enter your email';
const PLACEHOLDER_COLOR = "#999";

class Login extends Component {
    static propTypes = {
        handleLogin: PropTypes.func,
        loading: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = (email) => {
        this.setState({email});
    }

    handlePasswordChange = (password) => {
        this.setState({password});
    }

    handleLogin = () => {
        this.props.handleLogin(this.state.email, this.state.password);
    }

    renderLoginButton = () => {
        if (this.props.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#000000" />
                </View>
            );
        }
        return (
            <View style={styles.formButton}>
                <TouchableOpacity onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const {handleLogin} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={EMAIL_PLACEHOLDER}
                        placeholderTextColor={PLACEHOLDER_COLOR}
                        selectionColor={PLACEHOLDER_COLOR}
                        onChangeText={this.handleEmailChange}
                        underlineColorAndroid="transparent"
                        keyboardType="email-address"/>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder={PASSWORD_PLACEHOLDER}
                        placeholderTextColor={PLACEHOLDER_COLOR}
                        selectionColor={PLACEHOLDER_COLOR}
                        onChangeText={this.handlePasswordChange}
                        underlineColorAndroid="transparent"/>
                </View>
                {this.renderLoginButton()}
            </View>
        );
    }
}

export default Login;