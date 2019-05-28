import React from 'react'
import Tick from './Tick'
import * as lib from '../lib'
import './Axis.scss'

class AxisT extends React.Component {

    componentDidMount() {
        this.build()
    }

    build() {

        // Get current time (ms)
        const now = this.props.now.getTime()

        // Get current hour (h)
        const hour = this.props.now.getHours()

        // Get difference between current time and current hour (ms)
        const toNow = this.props.now.getMinutes() * 60 * 1000 +
            this.props.now.getSeconds() * 1000 +
            this.props.now.getMilliseconds()

        // Store it in state
        this.props.actions.updateTimeAxisToNow(toNow)

        // Define range (h)
        const range = lib.getRangeFromTo(hour - 24, hour)

        // Define ticks
        const ticks = range.map((h) => ({
            label: (h >= 0 ? h : h + 24) + ':00',
            value: now - toNow - (hour - h) * 60 * 60 * 1000,
        }))

        // Store them in state
        this.props.actions.updateTimeAxisTicks(ticks)
        
    }

    getStyles() {
        return {
            right: this.props.toNow / (this.props.scale * 60 * 60 * 1000) * 100 + '%'
        }
    }
    
    render() {
        return (
            <div className={`axis axis--t scale-${this.props.scale}${this.props.units}`}>
                <div className='wrapper' style={this.getStyles()}>
                    {this.props.ticks.map((tick, index) => (
                        <Tick
                            key={index}
                            label={tick.label}
                            value={tick.value}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default AxisT