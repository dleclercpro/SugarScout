import React from 'react'
import 'components/ButtonTimeScale.scss'

const ButtonTimeScale = (props) => (
    <button
        className={`button-timescale scale-${props.value}-h ${props.value === props.timeScale ? 'is-active' : ''}`}
        onClick={() => props.actions.updateTimescale(props.value)}
    >
        {props.value}h
    </button>
)

export default ButtonTimeScale