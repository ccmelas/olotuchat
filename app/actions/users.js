import * as api from './../api';

export const GET_USERS = 'GET_USERS';
export const LOAD_USERS = 'LOAD_USERS';

export const getUsers = () => {
    return (dispatch) => {
        api.getUsers((success, data, error) => {
            if (success) {
                let dataArray = [];
                let dataKeys = Object.keys(data);
                dataKeys.forEach(key => {
                    dataArray.push(data[key]);
                });
                dispatch(loadUsers(dataArray));
            }
        });
    }
};

export const loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        users
    }
}