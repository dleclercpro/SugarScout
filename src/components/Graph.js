import React from 'react'
import Corner from './Corner'
import InnerContainer from '../containers/InnerContainer';
import AxisTContainer from '../containers/AxisTContainer';
import AxisBGContainer from '../containers/AxisBGContainer';
import './Graph.scss'

const Graph = (props) => (
    <div className={`graph graph--${props.scale}-h`}>
        <InnerContainer />
        <Corner />
        <AxisTContainer />
        <AxisBGContainer />
    </div>
)

export default Graph