import thunk from 'redux-thunk';
import {applyMiddleware, compose} from 'redux';
import axios from 'axios';
import {serverName} from "../../config";

const LOGIN = 'login';
const LOGOUT = 'logout';
const SET_PROFILE = 'setprofile'

const sessionMiddleware = compose(applyMiddleware(thunk));

const initialState = {
    session: {
        user: {
            username: null,
            email: null,
            picture: null
        }
    },
    authenticated: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    switch (action.type) {
    case LOGIN:
        return Object.assign({}, state, {
            authenticated: true
        });
    case LOGOUT:
        return Object.assign({}, state, {
            initialState
        });
    case SET_PROFILE:
        return Object.assign({}, state, {
            session: {
                user: {
                    username: action.user.name,
                    email: action.user.email,
                    picture: action.user.picture
                }
            }
        });
    default:
        return state;
    }
};

const getProfile = () => {
    return (dispatch, state) => {
        axios.post(`${serverName}/service/account/userprofile`)
            .then(res => {
                dispatch(setProfile(JSON.parse(res.data.user)));
            });
    }
}

const setProfile = user => ({
    type: SET_PROFILE,
    user: user
})

const setLogin = () => ({
    type: LOGIN
});

const login = () => {
    return (dispatch, state) => {
        axios.get(`${serverName}/service/account/login/google`)
            .then(res => {
                window.location = res.data.redirect;
            });
        dispatch(setLogin());
    }
}

const checkLoginStatus = () => {
    return (dispatch, state) => {
        axios.post(`${serverName}/service/account/status`)
            .then(res => {
                if(res.data.session){
                    dispatch(setLogin());
                }
            });
    }
}

const logout = () => {
    return (dispatch, state) => {
        axios.get(`${serverName}/service/account/logout`)
            .then(res => {
                window.location = res.data.redirect;
            });
        dispatch(setLogout());
    }
}

const setLogout = () => ({
    type: LOGOUT
});

export {
    reducer as default,
    initialState as sessionInitialState,
    sessionMiddleware,
    checkLoginStatus,
    getProfile,
    login,
    logout
};
