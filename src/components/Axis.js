import React from 'react'
import Tick from './Tick'
import './Axis.scss'

const Axis = (props) => (
    <div className={`axis axis--${props.type}`}>
        {props.ticks.map((tick, index) => (
            <Tick key={index} value={tick} />
        ))}
    </div>
)

export default Axis