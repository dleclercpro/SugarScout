import React from 'react'
import Tick from './Tick'
import './Axis.scss'

class AxisBG extends React.Component {

    componentDidMount() {
        this.build()
    }

    generateTicks() {
        return this.props.ticks.map((tick, index) => (
            <Tick
                key={index}
                label={tick.label}
                value={tick.value}
            />
        ))
    }

    build() {
        return
    }
}

export default AxisBG