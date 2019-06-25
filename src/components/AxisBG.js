import React, { Component } from 'react'
import Tick from 'components/Tick'
import * as BG from 'constants/BG'
import * as lib from 'lib'
import 'components/AxisBG.scss'

class AxisBG extends Component {

    getTicks() {
        const range = this.props.ticks ? lib.getArrayRange(this.props.ticks) : lib.getArrayRange(BG.AXIS_VALUES)
        let ticks = this.props.ticks ? this.props.ticks : BG.AXIS_VALUES
        ticks = ticks.map((y) => ({ label: y, value: y }))
        
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
            <div className='axis axis--bg'>
                <div className='wrapper'>
                    {this.getTicks()}
                </div>
            </div>
        )
    }
}

export default AxisBG