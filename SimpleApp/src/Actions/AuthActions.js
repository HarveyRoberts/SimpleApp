import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    ACTIVATE_SPINNER, 
    LOGIN_USER_OUT_SUCCESS 
} from './Types';

export const emailChanged = (text) => ({
        type: EMAIL_CHANGED,
        payload: text
    });
export const passwordChanged = (text) => 
    //Automatically dispatches
     ({
        type: PASSWORD_CHANGED,
        payload: text
    });

export const logUserIn = ({ email, password }) => 
    //Redux Thunk
    //We can now manually dispatch an action in the .then
     (dispatch) => {
        dispatch({ type: ACTIVATE_SPINNER });
        firebase.auth().signInWithEmailAndPassword(email, password)
        //if there is an error in the reducer for login success
        //the catch with be executed because firebase thinks its
        //an error in the request
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => 
                loginUserFail(dispatch, error)
            );
    };

export const logUserOut = () => (dispatch) => {
        dispatch({ type: ACTIVATE_SPINNER });
        loginUserOutSuccess(dispatch);
    };


const loginUserFail = (dispatch, error) => {
    console.log(error);
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch(NavigationActions.navigate({ routeName: 'Home' }));
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserOutSuccess = (dispatch) => {
    dispatch({
        type: LOGIN_USER_OUT_SUCCESS
    });
};

