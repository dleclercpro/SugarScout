import React, { Component } from 'react'
import 'components/Dot.scss'

class Dot extends Component {

    getClass() {
        throw new Error('Method not implemented.')
    }

    getPosX() {
        const dX = this.props.timeScale * 60 * 60 * 1000
        const dx = this.props.now.getTime() - this.props.time
        
        return (dX - dx) / dX * this.props.innerWidth
    }

    getPosY() {
        const dY = this.props.range[1] - this.props.range[0]
        const dy = this.props.range[1] - this.props.value

        return dy / dY * this.props.innerHeight
    }

    handleMouseEnter = (e) => {
        throw new Error('Method not implemented.')
    }

    handleMouseMove = (e) => {
        this.props.actions.moveBubble({
            top: e.clientY,
            left: e.clientX,
        })
    }

    handleMouseLeave = (e) => {
        this.props.actions.hideBubble()
        this.props.actions.resetBubble()
    }

    render() {
        return (
            <circle className={this.getClass()}
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

export default Dot