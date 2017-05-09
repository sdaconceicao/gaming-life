import axios from 'axios';

export const actions = {
    APP_LOGIN: 'APP_LOGIN',
    APP_LOGOUT: 'APP_LOGOUT',
    SET_ACCOUNT: 'SET_ACCOUNT',
    UPDATE_ACCOUNT: 'UPDATE_ACCOUNT'
};

export function appLoginSuccess(account) {
    return {type: actions.APP_LOGIN, account};
}

export function appLogin(credentials) {
    return function(dispatch) {
        return axios.post('/login', {credentials}).then((response)=>{
            dispatch(appLoginSuccess(response.data.data));
        }).catch(error=>{
            throw(error);
        })
    }
}

export function appLogoutSuccess() {
    return {type: actions.APP_LOGOUT};
}

export function appLogout() {
    return function(dispatch) {
        dispatch(appLogoutSuccess());
    }
}


export function updateAccountSuccess(account) {
    return {type: actions.UPDATE_ACCOUNT, account};
}

export function updateAccount(){
    return function(dispatch) {
        return axios.get('/account').then((response) => {
            dispatch(updateAccountSuccess(response.data.data));
        }).catch(error => {
            throw(error);
        })
    }
}

export function setAccountSuccess(account) {
    return {type: actions.SET_ACCOUNT, account};
}

export function setAccount(account){
    return function(dispatch) {
        dispatch(setAccountSuccess(account));
        return axios.put('/account', {account}).then((response) => {
            return true;
        }).catch(error => {
            throw(error);
        })
    }
}
