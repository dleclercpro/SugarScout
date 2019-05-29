import React from 'react'
import Corner from './Corner'
import InnerBGContainer from '../containers/InnerBGContainer';
import InnerBasalContainer from '../containers/InnerBasalContainer';
import AxisTimeContainer from '../containers/AxisTimeContainer';
import AxisBGContainer from '../containers/AxisBGContainer';
import AxisBasalContainer from '../containers/AxisBasalContainer';
import './Graph.scss'

const Graph = (props) => (
    <div className={`graph graph--${props.scale}-h`}>
        <InnerBGContainer />
        <InnerBasalContainer />
        <Corner />
        <AxisTimeContainer />
        <AxisBGContainer />
        <AxisBasalContainer />
    </div>
)

export default Graph