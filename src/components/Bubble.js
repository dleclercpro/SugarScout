import React from 'react'
import * as lib from '../lib'
import './Bubble.scss'

const Bubble = (props) => (
    <div className={`bubble ${props.type} ${props.status === 'visible' ? 'is-visible' : ''}`} style={props.position}>
        <p className='info'>
            <span className='value'>{props.info.value}</span>
            {' '}
            <span className='units'>{props.info.units}</span>
        </p>
        <p className='time'>{lib.convertEpochToFormattedTime(props.time)}</p>
    </div>
)

export default Bubble