import axios from 'axios';

export const actions = {
    APP_LOGIN: 'APP_LOGIN',
    APP_LOGOUT: 'APP_LOGOUT',
    ACCOUNT_SAVE: 'ACCOUNT_SAVE',
    ACCOUNT_GET: 'ACCOUNT_GET'
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


export function getAccountSuccess(account) {
    return {type: actions.ACCOUNT_GET, account};
}

export function getAccount(){
    return function(dispatch) {
        return axios.get('/account').then((response) => {
            dispatch(getAccountSuccess(response.data.data));
        }).catch(error => {
            throw(error);
        })
    }
}

export function saveAccountSuccess(account) {
    return {type: actions.ACCOUNT_SAVE, account};
}

export function saveAccount(account){
    return function(dispatch) {
        dispatch(saveAccountSuccess(account));
        return axios.put('/account', {account}).then((response) => {
            return true;
        }).catch(error => {
            throw(error);
        })
    }
}
