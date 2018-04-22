import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { MainContainer } from './../components/Containers';
import { UserProfile } from './../components/Others';

class Profile extends Component {
    render () {
        const {user} = this.props.navigation.state.params;
        return (
            <MainContainer>
                <UserProfile user={user}/>
            </MainContainer>
        );
    }
}

export default Profile;