import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import AppContainer from './containers/AppContainer'
import './index.scss'

const loggerMiddleware = createLogger()

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
)