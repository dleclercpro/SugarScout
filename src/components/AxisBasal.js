import React from 'react'
import Axis from './Axis'
import * as Basal from '../constants/Basal'
import './AxisBasal.scss'

class AxisBasal extends Axis {

    build() {
        const ticks = Basal.AXIS_VALUES.map((y) => ({
            label: y,
            value: y,
        }))

        this.props.actions.updateBasalAxis({
            ticks,
        })
    }
    
    render() {
        return (
            <div className='axis axis--basal'>
                <div className='wrapper'>
                    {this.generateYTicks()}
                </div>
            </div>
        )
    }
}

export default AxisBasal