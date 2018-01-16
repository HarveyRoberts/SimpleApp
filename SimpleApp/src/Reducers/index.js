import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
export default combineReducers({
    //All reducers
    //Function that returns (not like Vue :p)
    auth: AuthReducer
});