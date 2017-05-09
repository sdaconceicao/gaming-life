import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from  './reducers';

let middlewares = [thunk];
//TODO Using require to import here since you cannot conditionally import yet
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

export default function configureStore(initialState){
    return createStore(rootReducer,
        initialState,
        applyMiddleware(...middlewares))
}
