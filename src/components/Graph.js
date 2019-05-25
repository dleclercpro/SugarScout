import React from 'react'
import Axis from './Axis'
import Inner from './Inner'
import Corner from './Corner'
import * as lib from '../lib'
import './Graph.scss'

const AXIS_T = lib.getRange(24)
const AXIS_Y = lib.getRange(16).reverse()

class Graph extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
  
    render() {
        return (
            <div className="graph">
                <Axis type='x' ticks={AXIS_T} />
                <Axis type='y' ticks={AXIS_Y} />
                <Inner />
                <Corner />
            </div>
        )    
    }
}

export default Graph