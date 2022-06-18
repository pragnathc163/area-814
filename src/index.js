import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from './context/StateProvider';
import { initialState } from './context/initialState';
import Reducer from './context/reducer';

import App from './App';

ReactDOM.render(
    <Router>
        <Provider initialState={initialState} reducer={Reducer}>
            <App />
        </Provider>
        <App />
    </Router>,
    document.getElementById('root')
);