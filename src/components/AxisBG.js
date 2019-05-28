import React from 'react'
import Tick from './Tick'
import * as lib from '../lib'
import './Axis.scss'

class AxisBG extends React.Component {

    componentDidMount() {
        this.build()
    }

    build() {

        // Get range (mmol/L)
        const range = lib.getRangeFromTo(this.props.range[0], this.props.range[1])

        // Define ticks
        const ticks = range.map((y) => ({
            label: y,
            value: y,
        })).reverse()
        
        // Store them in state
        this.props.actions.updateBGAxisTicks(ticks)
    }
    
    render() {
        return (
            <div className='axis axis--BG'>
                <div className='wrapper'>
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

export default AxisBG