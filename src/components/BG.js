import React from 'react'
import * as bg from '../constants/BG'
import * as lib from '../lib'
import './BG.scss'

class BG extends React.Component {

    getType() {
        if (this.props.value <= bg.VERY_LOW) {
            return 'very-low'
        }
        if (bg.VERY_LOW < this.props.value && this.props.value <= bg.LOW) {
            return 'low'
        }
        if (bg.LOW < this.props.value && this.props.value < bg.HIGH) {
            return 'normal'
        }
        if (bg.HIGH <= this.props.value && this.props.value < bg.VERY_HIGH) {
            return 'high'
        }
        if (bg.VERY_HIGH <= this.props.value) {
            return 'very-high'
        }
    }

    getPosX() {
        const dX = this.props.timeScale * 60 * 60 * 1000
        const dx = this.props.now.getTime() - this.props.time
        
        return (dX - dx) / dX * this.props.innerWidth
    }

    getPosY() {
        const dY = this.props.bgRange[1] - this.props.bgRange[0]
        const dy = this.props.bgRange[1] - this.props.value

        return dy / dY * this.props.innerHeight
    }

    handleMouseEnter = (e) => {
        this.props.actions.updateBubble({
            status: 'visible',
            type: 'bg bg--' + this.getType(),
            time: this.props.time,
            info: {
                value: lib.formatBG(this.props.value),
                units: bg.UNIT,
            },
        })
    }

    handleMouseMove = (e) => {
        this.props.actions.moveBubble({
            top: e.clientY,
            left: e.clientX,
        })
    }

    handleMouseLeave = (e) => {
        this.props.actions.resetBubble()
    }

    render() {
        return (
            <circle className={`dot bg bg--${this.getType()}`}
                cx={this.getPosX()}
                cy={this.getPosY()}
                r={4}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            />
        )
    }
}

export default BG