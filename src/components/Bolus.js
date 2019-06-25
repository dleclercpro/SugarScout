import React, { Component } from 'react'
import * as Units from 'constants/Units'
import * as lib from 'lib'
import 'components/Bolus.scss'

class Bolus extends Component {

    getPosX() {
        const dX = this.props.timeScale * 60 * 60 * 1000
        const dx = this.props.now.getTime() - this.props.time
        
        return (dX - dx) / dX * this.props.innerWidth
    }

    getPosY() {
        const dY = this.props.range[1] - this.props.range[0]
        const dy = this.props.range[1]

        return dy / dY * this.props.innerHeight
    }

    handleMouseEnter = (e) => {
        this.props.actions.updateBubbleInfos({
            target: 'bolus',
            time: this.props.time,
            info: {
                value: lib.formatBolus(this.props.value),
                units: Units.BOLUS,
            },
        })
        this.props.actions.showBubble()
    }

    handleMouseMove = (e) => {
        this.props.actions.moveBubble({
            top: e.clientY,
            left: e.clientX,
        })
    }

    handleMouseLeave = (e) => {
        this.props.actions.hideBubble()
    }

    render() {
        return (
            <circle className='bolus'
                cx={this.getPosX()}
                cy={this.getPosY()}
                r={3}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            />
        )
    }
}

export default Bolus