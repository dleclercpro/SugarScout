import React from 'react'
import Bar from './Bar'
import * as Basal from '../constants/Basal'
import * as lib from '../lib'
import './TB.scss'

class TB extends Bar {

    getType() {
        return ''
    }

    getStyles() {
        const height = this.props.basalRange[1] - this.props.basalRange[0]
        const dh = Math.abs(this.props.value) 
        const width = this.props.timeScale * 60 * 60 * 1000
        const dw = this.props.duration

        return {
            width: dw / width * 100 + '%',
            height: dh / height * 100 + '%',
        }
    }

    handleMouseEnter = (e) => {
        this.props.actions.updateBubble({
            status: 'visible',
            type: 'tb tb--' + this.getType(),
            time: this.props.time,
            info: {
                value: lib.formatBasal(this.props.value),
                units: Basal.UNIT,
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
            <div className={`bar tb tb--${this.getType()}`}
                style={this.getStyles()}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            ></div>
        )
    }
}

export default TB