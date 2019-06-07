import React from 'react'
import 'components/Tick.scss'

const Tick = (props) => {
    return (
        <div className='tick' style={props.style}>{props.label}</div>
    )
}

export default Tick