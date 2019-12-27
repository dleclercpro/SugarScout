import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import rootReducer from 'reducers';
import AppContainer from 'containers/AppContainer';
import 'index.scss';

const logger = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(promise, logger)
);

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);