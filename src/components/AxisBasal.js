import React, { Component } from 'react'
import Tick from 'components/Tick'
import * as lib from 'lib'
import 'components/AxisBasal.scss'

class AxisBasal extends Component {

    getTicks() {
        const range = lib.getArrayRange(this.props.ticks)
        const ticks = this.props.ticks.map((y) => ({ label: y, value: y }))
        
        let visibleTicks = [...ticks]
        visibleTicks.pop()

        return visibleTicks.map((tick, index) => {
            const nextTick = ticks[index + 1]
            const size = Math.abs(nextTick.value - tick.value)

            return (
                <Tick
                    key={index}
                    label={tick.label}
                    value={tick.value}
                    style={{
                        height: size / (range[1] - range[0]) * 100 + '%',
                    }}
                />
            )
        })
    }
    
    render() {
        return (
            <div className='axis axis--basal'>
                <div className='wrapper'>
                    {this.getTicks()}
                </div>
            </div>
        )
    }
}

export default AxisBasal