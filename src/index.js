import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'
import './index.scss'

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, createLogger())
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)