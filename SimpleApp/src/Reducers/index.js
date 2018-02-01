import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import NavReducer from './NavReducer';

export default combineReducers({
    //All reducers
    //Function that returns (not like Vue :p)
    auth: AuthReducer,
    nav: NavReducer
});
