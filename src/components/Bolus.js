import React, { Component } from 'react';
import * as Units from 'constants/Units';
import { H_TO_MS } from 'constants/Time';
import * as fmt from 'fmt';
import 'components/Bolus.scss';

class Bolus extends Component {

    getPosX() {
        const { now, time, timeScale, innerWidth } = this.props;

        const dX = timeScale * H_TO_MS;
        const dx = now.getTime() - time;
        
        return (dX - dx) / dX * innerWidth;
    }

    getPosY() {
        const { range, innerHeight } = this.props;

        const dY = range[1] - range[0];
        const dy = range[1];

        return dy / dY * innerHeight;
    }

    handleMouseEnter = (e) => {
        const { time, value } = this.props;
        const { updateBubbleInfos, showBubble } = this.props.actions;

        updateBubbleInfos({
            target: 'bolus',
            time: time,
            info: {
                value: fmt.bolus(value),
                units: Units.BOLUS,
            },
        });

        showBubble();
    }

    handleMouseMove = (e) => {
        const { moveBubble } = this.props.actions;

        moveBubble({
            top: e.clientY,
            left: e.clientX,
        });
    }

    handleMouseLeave = (e) => {
        const { hideBubble } = this.props.actions;

        hideBubble();
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
        );
    }
}

export default Bolus