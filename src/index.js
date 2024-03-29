import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { initializeStore } from './store'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';

let store = initializeStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
