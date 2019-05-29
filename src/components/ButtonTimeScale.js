import React from 'react'
import './ButtonTimeScale.scss'

const ButtonTimeScale = (props) => (
    <button
        className={`button-time-scale ${props.scale === props.timeScale ? 'is-active' : ''}`}
        onClick={() => props.actions.updateTimeAxis({scale: props.scale})}
    >
        {props.scale}h
    </button>
)

export default ButtonTimeScale