import React from 'react'
import Axis from './Axis'
import * as BG from '../constants/BG'
import './AxisBG.scss'

class AxisBG extends Axis {

    build() {
        const ticks = BG.AXIS_VALUES.map((y) => ({
            label: y,
            value: y,
        }))
        
        this.props.actions.updateBGAxis({
            ticks,
        })
    }
    
    render() {
        return (
            <div className='axis axis--bg'>
                <div className='wrapper'>
                    {this.generateYTicks()}
                </div>
            </div>
        )
    }
}

export default AxisBG