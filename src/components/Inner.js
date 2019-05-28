import React from 'react'
import BGContainer from '../containers/BGContainer';
import './Inner.scss'

const Inner = (props) => (
    <div className="inner">
        {props.scales.map((scale, index) => (
            <button key={index} className={props.scale === scale ? 'is-active' : ''} onClick={() => props.actions.updateTimeAxisScale(scale)}>{scale}h</button>
        ))}

        <button onClick={() => props.actions.fetchBGs()}>Fetch BGs</button>

        {props.bgs.map((bg, index) => (
            <BGContainer key={index} t={bg.t} value={bg.value} />
        ))}
    </div>
)

export default Inner