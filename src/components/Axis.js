import React from 'react'
import Tick from './Tick'
import './Axis.scss'

class Axis extends React.Component {

    componentDidMount() {
        this.build()
    }

    generateXTicks() {
        let visibleTicks = [...this.props.ticks]
        visibleTicks.pop()

        return visibleTicks.map((tick, index) => (
            <Tick
                key={index}
                label={tick.label}
                value={tick.value}
                style={{}}
            />
        ))
    }

    generateYTicks() {
        let visibleTicks = [...this.props.ticks]
        visibleTicks.pop()

        const nTicks = this.props.ticks.length
        const range = this.props.range[1] - this.props.range[0]

        return visibleTicks.map((tick, index, ticks) => {
            const nextTick = index + 1 === nTicks - 1 ? this.props.ticks[nTicks - 1] : ticks[index + 1]
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

    build() {
        throw new Error('To implement.')
    }
}

export default Axis