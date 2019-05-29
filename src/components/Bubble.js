import React from 'react'
import './Bubble.scss'

const Bubble = (props) => (
    <div className='bubble'>
        <p className='info'>{props.info}</p>
        <p className='time'>{props.time}</p>
    </div>
)

export default Bubble