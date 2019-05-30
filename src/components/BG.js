import React from 'react'
import Point from './Point';
import * as bg from '../constants/BG'
import * as lib from '../lib'
import './BG.scss'

class BG extends Point {

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

    getStyles() {
        const height = this.props.bgRange[1] - this.props.bgRange[0]
        const dh = this.props.bgRange[1] - this.props.value 
        const width = this.props.timeScale * 60 * 60 * 1000
        const dw = this.props.now - this.props.time

        return {
            top: dh / height * 100 + '%',
            right: dw / width * 100 + '%',
        }
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
        console.log(window.innerWidth, window.innerHeight)
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
            <div className={`point bg bg--${this.getType()}`}
                style={this.getStyles()}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            ></div>
        )
    }
}

export default BG