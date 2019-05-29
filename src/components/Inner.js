import React from 'react'
import Bubble from './Bubble';
import BGContainer from '../containers/BGContainer';
import './Inner.scss'

const Inner = (props) => (
    <div className="inner">
        {props.scales.map((scale, index) => (
            <button key={index}
                className={props.scale === scale ? 'is-active' : ''}
                onClick={() => props.actions.updateTimeAxis({
                    scale
                })}
            >
            {scale}h
            </button>
        ))}

        <button onClick={() => props.actions.fetchBGs()}>Fetch BGs</button>

        {props.bgs.map((bg, index) => (
            <BGContainer key={index} t={bg.t} value={bg.value} />
        ))}

        <Bubble info={`${4.5} mmol/L`} time='2019.05.28 - 09:05:00' />
    </div>
)

export default Inner