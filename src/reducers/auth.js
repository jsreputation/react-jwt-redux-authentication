import  {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    SIGNOUT
} from '../actions/type';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };
        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            };
        case SIGNIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            };
        case SIGNIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        case SIGNOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default: 
            return state;
    }
}