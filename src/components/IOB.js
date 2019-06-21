import React, { Component } from 'react'
import * as Units from 'constants/Units'
import * as lib from 'lib'
import 'components/IOB.scss'

class IOB extends Component {

    getPosX() {
        const dX = this.props.timeScale * 60 * 60 * 1000
        const dx = this.props.now.getTime() - this.props.time
        
        return (dX - dx) / dX * this.props.innerWidth
    }

    getPosY() {
        const dY = this.props.basalRange[1] - this.props.basalRange[0]
        const dy = this.props.basalRange[1] - this.props.value

        return dy / dY * this.props.innerHeight
    }

    handleMouseEnter = (e) => {
        this.props.actions.updateBubbleInfos({
            target: 'iob',
            time: this.props.time,
            info: {
                value: lib.formatIOB(this.props.value),
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
            <circle className='iob'
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

export default IOB