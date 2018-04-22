import * as actions from './../actions/users';

const initialState = {
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOAD_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ] 
            };
        default:
            return state;
    }
};

export default reducer;

