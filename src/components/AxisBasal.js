import React from 'react'
import Axis from './Axis'
import * as lib from '../lib'
import './AxisBasal.scss'

class AxisBasal extends Axis {

    build() {

        // Get range (mmol/L)
        const range = lib.getRangeFromTo(this.props.range[0], this.props.range[1])

        // Define ticks
        const ticks = range.map((y) => ({
            label: y,
            value: y,
        })).reverse()
        
        // Update state
        this.props.actions.updateBasalAxis({
            ticks
        })
    }
    
    render() {
        return (
            <div className='axis axis--basal'>
                <div className='wrapper'>
                    {this.generateTicks()}
                </div>
            </div>
        )
    }
}

export default AxisBasal