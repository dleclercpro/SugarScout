import React from 'react'
import Axis from './Axis'
import * as lib from '../lib'
import './Axis.scss'

class AxisBG extends Axis {

    build() {

        // Get range (mmol/L)
        const range = lib.getRangeFromTo(this.props.range[0], this.props.range[1])

        // Define ticks
        const ticks = range.map((y) => ({
            label: y,
            value: y,
        })).reverse()
        
        // Update state
        this.props.actions.updateBGAxis({
            ticks
        })
    }
    
    render() {
        return (
            <div className='axis axis--BG'>
                <div className='wrapper'>
                    {this.generateTicks()}
                </div>
            </div>
        )
    }
}

export default AxisBG