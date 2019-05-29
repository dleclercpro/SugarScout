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

    showBubble = () => {
        this.props.actions.updateBubble({
            status: 'visible',
            position: this.getStyles(),
            time: this.props.time,
            info: lib.formatBG(this.props.value) + ' ' + bg.UNIT,
        })
    }

    hideBubble = () => {
        this.props.actions.updateBubble({
            status: 'invisible',
        })
    }

    render() {
        return (
            <div className={`bg bg--${this.getType()}`}
                style={this.getStyles()}
                onMouseEnter={this.showBubble}
                onMouseLeave={this.hideBubble}
            ></div>
        )
    }
}

export default BG