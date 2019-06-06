import React from 'react'
import Axis from './Axis'
import * as Time from '../constants/Time'
import * as lib from '../lib'
import './AxisTime.scss'

class AxisTime extends Axis {

    build() {

        // Get current time (ms)
        const now = this.props.now.getTime()

        // Get current hour (h)
        const hour = this.props.now.getHours()

        // Get difference between current time and current hour (ms)
        const toNow = this.props.now.getMinutes() * 60 * 1000 +
            this.props.now.getSeconds() * 1000 +
            this.props.now.getMilliseconds()

        // Define range (h)
        const range = lib.getRangeFromTo(hour - this.props.nTicks + 1, hour)

        // Define ticks
        const ticks = range.map((t) => ({
            label: (t >= 0 ? t : t + Time.N_HOURS_DAY) + ':00',
            value: now - toNow - (hour - t) * 60 * 60 * 1000,
        }))

        // Update time state
        this.props.actions.updateTimeToNow(toNow)

        // Update axis state
        this.props.actions.updateTimeAxis({
            ticks,
        })
    }

    getStyles() {
        return {
            right: this.props.toNow / (this.props.timeScale * 60 * 60 * 1000) * 100 + '%'
        }
    }
    
    render() {
        return (
            <div className='axis axis--time'>
                <div className='wrapper' style={this.getStyles()}>
                    {this.generateXTicks()}
                </div>
            </div>
        )
    }
}

export default AxisTime