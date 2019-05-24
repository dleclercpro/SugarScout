import React from 'react'
import ReactDom from 'react-dom'
import * as ReactRedux from 'react-redux'
import * as Redux from 'redux'
import rootReducer from './reducers'
import App from './components/App'

import './index.scss'

const store = Redux.createStore(rootReducer)

ReactDom.render(
    <ReactRedux.Provider store={store}>
        <App />
    </ReactRedux.Provider>,
    document.getElementById('root')
)