import React from 'react'
import './Inner.scss'

const Inner = (props) => (
    <div className="inner">
        <button onClick={() => props.actions.updateTimeAxisScale(1)}>1h</button>
        <button onClick={() => props.actions.updateTimeAxisScale(3)}>3h</button>
        <button onClick={() => props.actions.updateTimeAxisScale(6)}>6h</button>
        <button onClick={() => props.actions.updateTimeAxisScale(12)}>12h</button>
        <button onClick={() => props.actions.updateTimeAxisScale(24)}>24h</button>
    </div>
)

export default Inner