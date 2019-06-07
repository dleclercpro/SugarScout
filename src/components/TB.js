import React, { Component } from 'react'
import * as Basal from 'constants/Basal'
import * as lib from 'lib'
import 'components/TB.scss'

class TB extends Component {

    getPosX() {
        const dX = this.props.timeScale * 60 * 60 * 1000
        const dx = this.props.now.getTime() - this.props.time

        // Trick on half pixels
        return Math.floor((dX - dx) / dX * this.props.innerWidth)
    }

    getPosY() {
        const dY = this.props.basalRange[1] - this.props.basalRange[0]
        let dy = this.props.value >= 0 ? this.props.basalRange[1] - this.props.value : this.props.basalRange[1] 

        return dy / dY * this.props.innerHeight
    }

    getWidth() {
        const dW = this.props.timeScale * 60 * 60 * 1000
        const dw = this.props.duration

        // Trick on half pixels
        return Math.ceil(dw / dW * this.props.innerWidth)
    }

    getHeight() {
        const dH = this.props.basalRange[1] - this.props.basalRange[0]
        const dh = Math.abs(this.props.value)

        return dh / dH * this.props.innerHeight
    }

    handleMouseEnter = (e) => {
        this.props.actions.updateBubble({
            type: 'tb',
            time: this.props.time,
            info: {
                value: lib.formatBasal(this.props.value),
                units: Basal.UNITS,
            },
            duration: {
                value: Math.round(this.props.duration / 60 / 1000),
                units: 'm',
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
            <rect className='tb'
                x={this.getPosX()}
                y={this.getPosY()}
                width={this.getWidth()}
                height={this.getHeight()}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            />
        )
    }
}

export default TB