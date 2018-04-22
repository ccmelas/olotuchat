import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { MainContainer } from './../components/Containers';
import firebase from './../config/firebase';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.checkAuth();
    }

    checkAuth = () => {
        //This will check if the user is authentication and navigate appropriately
        //this.props.navigation.navigate('App');
        if (!firebase.auth().currentUser) {
            this.props.navigation.navigate('Auth')
        } else {
            this.props.navigation.navigate('App');
        }
    }

    render() {
        return (
            <MainContainer>
                <View>
                    <Image source={require('./../assets/logo.png')}/>
                </View>
            </MainContainer>
        );
    }
}

export default Splash;