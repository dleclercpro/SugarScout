import React from 'react'
import GraphContainer from '../containers/GraphContainer'
import BubbleContainer from '../containers/BubbleContainer'
import './App.scss'

const App = () => (
    <div className='app'>
        <BubbleContainer />
        <GraphContainer />
    </div>
)

export default App