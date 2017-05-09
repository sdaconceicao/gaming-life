import {actions} from './App.actions';

export default function appReducers ( state= {}, action){
    switch (action.type){
        case actions.APP_SET_HOME:
            return Object.assign({}, state, {back: !action.home, content: null});
        case actions.APP_SET_CONTENT:
            return Object.assign({}, state, {back: true, content: action.content});
        default:
            return state;
    }
}
