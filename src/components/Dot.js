import React, { Component } from 'react';
import { H_TO_MS } from 'constants/Time';
import 'components/Dot.scss';

class Dot extends Component {

    getClass() {
        throw new Error('Method not implemented.');
    }

    getPosX() {
        const { now, time, timeScale, innerWidth } = this.props;

        const dX = timeScale * H_TO_MS;
        const dx = now.getTime() - time;
        
        return (dX - dx) / dX * innerWidth;
    }

    getPosY() {
        const { range, value, innerHeight } = this.props;

        const dY = range[1] - range[0];
        const dy = range[1] - value;

        return dy / dY * innerHeight;
    }

    handleMouseEnter = (e) => {
        throw new Error('Method not implemented.');
    }

    handleMouseMove = (e) => {
        const { moveBubble } = this.props.actions;

        moveBubble({
            top: e.clientY,
            left: e.clientX,
        });
    }

    handleMouseLeave = (e) => {
        const { hideBubble, resetBubble } = this.props.actions;
        
        hideBubble();
        resetBubble();
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
        );
    }
}

export default Dot;