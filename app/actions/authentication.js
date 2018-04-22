import { AsyncStorage } from 'react-native';

import * as api from './../api';
import { auth } from './../config/firebase';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const login = (user) => {
    return {
        type: LOGIN,
        user
    };
};

export const startLogin = (payload, successCB, errorCB) => {
    return (dispatch) => {
        api.login(payload, (success, data, error) => {
            if (success) {
                if (data.exists) dispatch(login(data.user));
                successCB(data);
            }else if (error) errorCB(error)
        });
    };
};

export const checkLoginStatus = (callback) => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            let isLoggedIn = (user !== null);

            if (isLoggedIn) {
                //get the user object from the Async storage
                AsyncStorage.getItem('user', (err, user) => {
                    if (user === null) isLoggedIn = false //set the loggedIn value to false
                    else dispatch(login(JSON.parse(user)));
                    callback(isLoggedIn);
                });
            } else {
                dispatch(logout);
                callback(isLoggedIn);
            }
        });
    };
}

export const updateProfile = (payload, successCB, errorCB) => {
    return (dispatch) => {
        api.createUser(payload, function (success, data, error) {
            if (success) {
                dispatch({type: LOGIN, payload});
                successCB();
            } else if (error) errorCB(error)
        });
    };
}


export const logout = () => {
    return {
        type: LOGOUT
    }
};