import React from 'react'
import './Inner.scss'

const Inner = (props) => {
    const scales = [1, 3, 6, 12, 24]

    return (
        <div className="inner">
            {scales.map((scale) => (
                <button className={props.scale === scale ? 'is-active' : ''} onClick={() => props.actions.updateTimeAxisScale(scale)}>{scale}h</button>
            ))}
        </div>
    )
}

export default Inner