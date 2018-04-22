import { AsyncStorage } from 'react-native';

import * as actions from './../actions/authentication';

const initialState = {
    authenticatedUser: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.LOGIN:
            // AsyncStorage.multiSet([
            //     ['user', JSON.stringify(action.user)]
            // ]);
            return {
                ...state,
                authenticatedUser: action.user
            };

        case actions.LOGOUT:
            AsyncStorage.multiRemove(['user']);

            return {
                ...state,
                authenticatedUser: null
            };
        default:
            return state;
    }
}

export default reducer;