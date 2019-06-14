import React from 'react'
import * as lib from 'lib'
import 'components/Bubble.scss'

const Bubble = (props) => (
    <div className={`bubble ${props.target} is-${props.status}`} style={props.position}>
        {props.info &&
            <p className='info'>
                <span className='value'>{props.info.value}</span>
                {' '}
                <span className='units'>{props.info.units}</span>
            </p>
        }
        {props.duration &&
            <p className='duration'>
                [
                    <span className='value'>{props.duration.value}</span>
                    {' '}
                    <span className='units'>{props.duration.units}</span>
                ]
            </p>
        }
        {props.time &&
            <p className='time'>
                {lib.convertEpochToFormatTime(props.time)}
            </p>
        }
    </div>
)

export default Bubble