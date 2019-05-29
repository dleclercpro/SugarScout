import React from 'react'
import Axis from './Axis'
import * as lib from '../lib'
import './Axis.scss'

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
        const ticks = range.map((h) => ({
            label: (h >= 0 ? h : h + 24) + ':00',
            value: now - toNow - (hour - h) * 60 * 60 * 1000,
        }))

        // Update state
        this.props.actions.updateTimeAxis({
            toNow,
            ticks,
        })
    }

    getStyles() {
        return {
            right: this.props.toNow / (this.props.scale * 60 * 60 * 1000) * 100 + '%'
        }
    }
    
    render() {
        return (
            <div className='axis axis--time'>
                <div className='wrapper' style={this.getStyles()}>
                    {this.generateTicks()}
                </div>
            </div>
        )
    }
}

export default AxisTime