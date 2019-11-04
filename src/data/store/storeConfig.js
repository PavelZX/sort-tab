import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
//import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';

import {rootReducer} from "./rootReducer";

//let middleware = [thunkMiddleware];

const middleware = [
    thunkMiddleware,
    createLogger({
        duration: true
    })
];

export const configureStore = (preloadedState) => {
    return createStore(
        rootReducer,
        preloadedState,
        //composeWithDevTools(applyMiddleware(...middleware)),
        applyMiddleware(...middleware)
    )
};