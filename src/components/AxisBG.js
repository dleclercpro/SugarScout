import React from 'react'
import Tick from './Tick'
import * as BG from '../constants/BG'
import './AxisBG.scss'

class AxisBG extends React.Component {

    build() {
        const range = this.props.range[1] - this.props.range[0]
        const ticks = BG.AXIS_VALUES.map((y) => ({ label: y, value: y }))
        const nTicks = ticks.length
        
        let visibleTicks = [...ticks]
        visibleTicks.pop()

        return visibleTicks.map((tick, index) => {
            const nextTick = index + 1 === nTicks - 1 ? ticks[nTicks - 1] : ticks[index + 1]
            const size = Math.abs(nextTick.value - tick.value)

            return (
                <Tick
                    key={index}
                    label={tick.label}
                    value={tick.value}
                    style={{
                        height: size / range * 100 + '%',
                    }}
                />
            )
        })
    }
    
    render() {
        return (
            <div className='axis axis--bg'>
                <div className='wrapper'>
                    {this.build()}
                </div>
            </div>
        )
    }
}

export default AxisBG