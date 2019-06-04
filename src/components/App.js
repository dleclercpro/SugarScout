import React from 'react'
import DashContainer from '../containers/DashContainer'
import GraphContainer from '../containers/GraphContainer'
import BubbleContainer from '../containers/BubbleContainer'
import './App.scss'

const App = () => (
    <div className='app'>
        <BubbleContainer />
        <DashContainer />
        <GraphContainer />
    </div>
)

export default App