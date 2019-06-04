import React from 'react'
import './Tick.scss'

const Tick = (props) => {
    return (
        <div className='tick' style={props.style}>{props.label}</div>
    )
}

export default Tick