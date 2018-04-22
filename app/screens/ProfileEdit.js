import React, {Component} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MainContainer } from './../components/Containers';
import { Profile } from './../components/Forms';
import { Logo } from './../components/Logo';

import { updateProfile } from './../actions/authentication';
import { getUsers } from './../actions/users';

class ProfileEdit extends Component {
    
    static propTypes = {
        authenticatedUser: PropTypes.object,
        dispatch: PropTypes.func,
        navigation: PropTypes.object
    };

    updateProfile = (payload) => {
        const {uid} = this.props.navigation.state.params;
        payload.uid = uid;
        this.props.dispatch(
            updateProfile(payload, this.onUpdateSuccess, this.onUpdateError)
        );
    }

    onUpdateSuccess = () => {
        this.props.dispatch(getUsers());
        this.props.navigation.navigate('Home');
    }

    onUpdateError(error) {
        console.log('Login error', error);
    }

    render() {
        return (
            <MainContainer>
                <KeyboardAvoidingView style={{flex: 1, width: '100%'}} behavior="padding">
                    <Profile handleProfileUpdate={this.updateProfile}/>
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
export default connect(mapStateToProps)(ProfileEdit);