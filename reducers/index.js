import React from 'react';

const initialState = {
    user: {
        isLoggedIN: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPost: [],
    }
}

const login = (data) => {
    return {
        type: 'Log_IN',
        data,
    }
}

const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
}

changeNickname('boogicho');

const rootReducer = (state = initialState, action) => {
    swith(action.type){
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            };
    }
};

export default rootReducer;