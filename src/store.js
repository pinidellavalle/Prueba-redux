import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'

const InitialState = {
    counter: 0
};

export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            return Object.assign({}, state, {
                counter: state.counter + 1
            })
        case 'SUBS_COUNTER':
            return Object.assign({}, state, {
                counter: state.counter - 1
            })
        case 'RESET_COUNTER':
            return Object.assign({}, state, {
                counter: 0
            })
        default:
            return state;
    }
};

export const addCounter = () => dispatch => {
    return dispatch({
        type: 'ADD_COUNTER'
    });
};

export const subsCounter = () => dispatch => {
    return dispatch({
        type: 'SUBS_COUNTER'
    });
};

export const resetCounter = () => dispatch => {
    return dispatch({
        type: 'RESET_COUNTER'
    });
};


export function initializeStore() {
    return createStore(reducer, InitialState, applyMiddleware(thunkMiddleware))
}