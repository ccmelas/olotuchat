import { combineReducers } from 'redux';
import authentication from './authentication';
import messages from './messages';
import users from './users';

export default combineReducers({
    authentication,
    messages,
    users
});
