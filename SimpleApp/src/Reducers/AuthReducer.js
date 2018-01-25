import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    ACTIVATE_SPINNER, 
    LOGIN_USER_OUT_SUCCESS 
} from '../Actions/Types';

const INIT_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    isLoggedIn: false,
};

/*reducer compares old state and new state*/
/*takes in action and old state*/
export default (state = INIT_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            //need to changed the state correctly because of how JS works ^^
            //basically we need to create immutable state
            //WRONG:state.email = action.payload
            //WRONG:return state
            //CREATE NEW OBJECT
            return {
                //take all existing properties on state and throw them into this
                ...state,
                //define email and add it over the top of what was on the state
                email: action.payload
            };
        case PASSWORD_CHANGED:
            return {
                ...state, 
                password: action.payload
            };
        case LOGIN_USER_SUCCESS:
            return { 
                ...state, 
                user: action.payload, 
                error: '', 
                loading: false, 
                isLoggedIn: true 
            };
        case LOGIN_USER_FAIL:
            return { 
                ...state, 
                error: 'Invalid email or password.', 
                loading: false, 
                isLoggedIn: false 
            };
        case ACTIVATE_SPINNER:
            return { ...state, 
                loading: true, 
                error: '', 
                user: null, 
                email: '', 
                password: '' 
            };
        case LOGIN_USER_OUT_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                isLoggedIn: false 
            };
        default:
            return state;
    }
};
