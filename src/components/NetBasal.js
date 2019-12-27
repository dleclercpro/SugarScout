import React, { Component } from 'react';
import * as Units from 'constants/Units';
import { H_TO_MS, M_TO_MS } from 'constants/Time';
import * as fmt from 'fmt';
import 'components/NetBasal.scss';

class NetBasal extends Component {

    getPosX() {
        const { now, time, timeScale, innerWidth } = this.props;

        const dX = timeScale * H_TO_MS;
        const dx = now.getTime() - time;

        // Trick on half pixels
        return Math.floor((dX - dx) / dX * innerWidth);
    }

    getPosY() {
        const { range, value, innerHeight } = this.props;

        const dY = range[1] - range[0];
        let dy = value >= 0 ? range[1] - value : range[1];

        return dy / dY * innerHeight;
    }

    getWidth() {
        const { duration, timeScale, innerWidth } = this.props;

        const dW = timeScale * H_TO_MS;
        const dw = duration;

        // Trick on half pixels
        return Math.ceil(dw / dW * innerWidth);
    }

    getHeight() {
        const { range, value, innerHeight } = this.props;

        const dH = range[1] - range[0];
        const dh = Math.abs(value);

        return dh / dH * innerHeight;
    }

    handleMouseEnter = (e) => {
        const { time, value, duration } = this.props;
        const { updateBubbleInfos, showBubble } = this.props.actions;

        updateBubbleInfos({
            target: 'netBasal',
            time: time,
            info: {
                value: fmt.basal(value),
                units: Units.BASAL,
            },
            duration: {
                value: Math.round(duration / M_TO_MS),
                units: 'm',
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
        const { hideBubble, resetBubble } = this.props.actions;
        
        hideBubble();
        resetBubble();
    }

    render() {
        return (
            <rect className='netBasal'
                x={this.getPosX()}
                y={this.getPosY()}
                width={this.getWidth()}
                height={this.getHeight()}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseLeave={this.handleMouseLeave}
            />
        );
    }
}

export default NetBasal;