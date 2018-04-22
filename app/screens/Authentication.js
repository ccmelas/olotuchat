import React, {Component} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { connectAlert } from './../components/Alert';
import { MainContainer } from './../components/Containers';
import { Login } from './../components/Forms';
import { Logo } from './../components/Logo';

import { startLogin } from './../actions/authentication';
import { getUsers } from './../actions/users';
import { subscribeToChats } from './../actions/messages';

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    static propTypes = {
        authenticatedUser: PropTypes.object,
        dispatch: PropTypes.func,
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    };

    login = (email, password) => {
        if (!email) {
            this.props.alertWithType('info', 'Missing Field', "Please provide an email");
            return;
        }

        if (!password) {
            this.props.alertWithType('info', 'Missing Field', "Please provide a password");
            return;
        }

        this.setState({loading: true});
        this.props.dispatch(startLogin({
            email,
            password
        }, this.onLoginSuccess, this.onLoginError));
    }

    onLoginSuccess = ({exists, user}) => {
        if (!exists) {
            this.props.navigation.navigate('ProfileEdit', {uid: user.uid});
        } else {
            this.props.dispatch(getUsers());
            this.props.dispatch(subscribeToChats(this.props.authenticatedUser));
            this.props.navigation.navigate('Home');
        }
    }

    onLoginError = (error) => {
        this.props.alertWithType('error', 'Login failed', error.toString());
        this.setState({loading: false});
    }

    componentWillMount() {
        if(this.props.authenticatedUser) {
            this.props.navigation.navigate('App');
        }
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        if (newProps.authenticatedUser) {
            this.props.navigation.navigate('App');
        }
    }

    render() {
        return (
            <MainContainer>
                <KeyboardAvoidingView style={{flex: 1, width: '100%'}} behavior="padding">
                    <Logo/>
                    <Login loading={this.state.loading} handleLogin={this.login}/>
                </KeyboardAvoidingView>
            </MainContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authenticatedUser: state.authentication.authenticatedUser
    }
};
export default connect(mapStateToProps)(connectAlert(Authentication));