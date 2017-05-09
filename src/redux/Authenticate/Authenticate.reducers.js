import {actions} from './Authenticate.actions';

export default function authReducers ( state= {}, action){
    switch (action.type){
        case actions.APP_LOGIN:
            return Object.assign({}, state, {back: false, authenticated: true, account: action.account});
        case actions.APP_LOGOUT:
            return Object.assign({}, state, {back: false, authenticated: false, account: null});
        case actions.ACCOUNT_SAVE:
            return Object.assign({}, state, {account: action.account});
        case actions.ACCOUNT_GET:
            return Object.assign({}, state, {account: action.account});
        default:
            return state;
    }
}
