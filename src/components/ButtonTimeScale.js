import React from 'react'
import './ButtonTimeScale.scss'

const ButtonTimeScale = (props) => (
    <button
        className={`button-timescale ${props.value === props.timeScale ? 'is-active' : ''}`}
        onClick={() => props.actions.updateTime({scale: props.value})}
    >
        {props.value}h
    </button>
)

export default ButtonTimeScale