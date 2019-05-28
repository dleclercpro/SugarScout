import React from 'react'
import GraphCorner from './GraphCorner'
import GraphInnerContainer from '../containers/GraphInner';
import AxisTContainer from '../containers/AxisTContainer';
import AxisBGContainer from '../containers/AxisBGContainer';
import './Graph.scss'

const Graph = (props) => (
    <div className='graph'>
        <AxisTContainer />
        <AxisBGContainer />
        <GraphInnerContainer />
        <GraphCorner />
    </div>
)

export default Graph