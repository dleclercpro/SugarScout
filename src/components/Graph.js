import React from 'react'
import Axis from './Axis'
import Inner from './Inner'
import Corner from './Corner'
import * as config from '../config'
import * as lib from '../lib'
import './Graph.scss'

class Graph extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            now: new Date(),
            axes: {
                x: {
                    toNow: 0, // Time spent since last hour and now (ms)
                    scale: config.GRAPH_AXIS_X_UNITS === 'h' ? config.GRAPH_AXIS_X_SCALE_H : 0,
                    ticks: [],
                },
                y: {
                    min: config.GRAPH_AXIS_Y_UNITS === 'mmol/L' ? config.GRAPH_AXIS_Y_MIN_MMOL_L : config.GRAPH_AXIS_Y_MIN_MG_DL,
                    max: config.GRAPH_AXIS_Y_UNITS === 'mmol/L' ? config.GRAPH_AXIS_Y_MAX_MMOL_L : config.GRAPH_AXIS_Y_MAX_MG_DL,
                    ticks: [],
                },
            },
            data: [],
        }
    }

    componentWillMount() {
        this.buildXAxis()
        this.buildYAxis()
    }

    buildXAxis() {

        // Get current time (ms)
        const now = this.state.now.getTime()

        // Get current hour (h)
        const hour = this.state.now.getHours()

        // Get difference between current time and current hour (ms)
        const toNow = this.state.now.getMinutes() * 60 * 1000 +
            this.state.now.getSeconds() * 1000 +
            this.state.now.getMilliseconds()

        // Define range (h)
        const range = lib.getRangeFromTo(hour - this.state.axes.x.scale, hour)

        // Define ticks
        const ticks = range.map((t) => ({
            label: (t >= 0 ? t : t + 24) + ':00',
            value: now - toNow - (hour - t) * 60 * 60 * 1000,
        }))

        // Store them
        this.setState((state) => {
            state.axes.x = {...state.axes.x, toNow, ticks}
            return state
        })
    }

    buildYAxis() {

        // Get range (mmol/L)
        const range = lib.getRangeFromTo(this.state.axes.y.min, this.state.axes.y.max)

        // Define ticks
        const ticks = range.map((y) => ({
            label: y,
            value: y,
        })).reverse()
        
        // Store them
        this.setState((state) => {
            state.axes.y.ticks = ticks
            return state
        })
    }
  
    render() {
        return (
            <div className="graph">
                <Axis type='x' state={this.state.axes.x} />
                <Axis type='y' state={this.state.axes.y} />
                <Inner />
                <Corner />
            </div>
        )    
    }
}

export default Graph