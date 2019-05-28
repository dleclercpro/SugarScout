import React from 'react'
import './GraphInner.scss'

const GraphInner = (props) => (
    <div className="graph-inner">
        <button onClick={() => props.actions.updateTimeScale(3)}>3h</button>
        <button onClick={() => props.actions.updateTimeScale(6)}>6h</button>
        <button onClick={() => props.actions.updateTimeScale(12)}>12h</button>
        <button onClick={() => props.actions.updateTimeScale(24)}>24h</button>
    </div>
)

export default GraphInner