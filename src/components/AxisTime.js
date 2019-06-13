import React, { Component } from 'react'
import Tick from 'components/Tick'
import * as Time from 'constants/Time'
import * as lib from 'lib'
import 'components/AxisTime.scss'

class AxisTime extends Component {

    build() {
        const now = this.props.now.getTime()
        const hour = this.props.now.getHours()

        const range = lib.getRangeFromTo(hour - this.props.nTicks + 1, hour)
        const ticks = range.map((t) => ({
            label: (t >= 0 ? t : t + Time.N_HOURS_PER_DAY) + ':00',
            value: now - this.props.toNow - (hour - t) * 60 * 60 * 1000,
        }))

        return ticks.map((tick, index) => (
            <Tick
                key={index}
                label={tick.label}
                value={tick.value}
                style={{}}
            />
        ))
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
                    {this.build()}
                </div>
            </div>
        )
    }
}

export default AxisTime