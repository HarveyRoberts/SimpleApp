import {EMAIL_CHANGED,PASSWORD_CHANGED} from "../Actions/Types";

const INIT_STATE = { email:'', password:''};

/*reducer compares old state and new state*/
/*takes in action and old state*/
export default (state=INIT_STATE,action) => {
    switch(action.type) {
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
                ...state, password: action.payload
            };
        default:
            return state;
    }

};