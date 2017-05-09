import {combineReducers} from 'redux';
import appReducers from './App/App.reducers';
import authReducers from './Authenticate/Authenticate.reducers';
import libraryReducers from './Library/Library.reducers';

export const rootReducer = combineReducers({
    appReducers,
    authReducers,
    libraryReducers
});
