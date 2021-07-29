import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    SIGNOUT,
    SET_MESSAGE
} from './type';

import AuthService from '../services/auth.service';

export const signUp = (username, email, password) => (dispatch) => {
    return AuthService.signUp(username, email, password).then((response) => {
        dispatch({
            type: REGISTER_SUCCESS
        });

        dispatch({
            type: SET_MESSAGE,
            payload: response.data.message
        });

        return Promise.resolve();
    },
    (error) => {
        const message = 
            (error.response && error.response.data && errror.response.data.message) ||
            error.message || error.toString();
        dispatch({
            type: REGISTER_FAIL
        });

        dispatch({
            type: SET_MESSAGE,
            payload: message
        });

        return Promise.reject();
    });
}

export const signIn = (username, password) => (dispatch) => {
    return AuthService.signIn(username, password).then((data) => {
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: {
                user: data
            }
        });

        return Promise.resolve();
    },
    (error) => {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        dispatch({
            type: SIGNIN_FAIL
        });

        dispatch({
            type: SET_MESSAGE,
            payload: message
        });

        return Promise.reject();
    } 
    );
}

export const signOut = () => {
    AuthService.signOut();

    dispatch({
        type: SIGNOUT
    });
}