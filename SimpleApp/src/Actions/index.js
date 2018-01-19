import {EMAIL_CHANGED, PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,ACTIVATE_SPINNER} from "./Types";
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
  return {
      type:EMAIL_CHANGED,
      payload:text
  };
};
export const passwordChanged = (text) => {
    //Automatically dispatches
  return {
      type:PASSWORD_CHANGED,
      payload:text
  };
};

export const logUserIn = ({email,password}) => {
    //Redux Thunk
    //We can now manually dispatch an action in the .then
    return (dispatch) => {
        dispatch({type: ACTIVATE_SPINNER});
        firebase.auth().signInWithEmailAndPassword(email,password)
            //if there is an error in the reducer for login success
            //the catch with be executed because firebase thinks its
            //an error in the request
            .then(user => loginUserSuccess(dispatch,user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(user => loginUserSuccess(dispatch,user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};


const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload:user
    });
    Actions.Main();
};