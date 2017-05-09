import {actions} from './Authenticate.actions';

export default function authReducers ( state= {}, action){
    switch (action.type){
        case actions.APP_LOGIN:
            return Object.assign({}, state, {back: false, authenticated: true, app: action.account});
        case actions.APP_LOGOUT:
            return Object.assign({}, state, {back: false, authenticated: false, account: null});
        case actions.SET_ACCOUNT:
            return Object.assign({}, state, {account: action.account});
        case actions.UPDATE_ACCOUNT:
            return Object.assign({}, state, {account: action.account});
        default:
            return state;
    }
}
