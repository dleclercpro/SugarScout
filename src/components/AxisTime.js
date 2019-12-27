import React, { Component } from 'react';
import Tick from 'components/Tick';
import { D_TO_H, H_TO_MS } from 'constants/Time';
import { getRangeFromTo } from 'lib';
import 'components/AxisTime.scss';

class AxisTime extends Component {

    getLabel(t) {
        let label = t;

        if (t < 0) {
            label += D_TO_H;
        }

        return label + ':00';
    }

    getTicks() {
        const { now, toNow, nTicks } = this.props;

        const epoch = now.getTime();
        const hour = now.getHours();

        const hours = getRangeFromTo(hour - nTicks + 1, hour);
        
        const ticks = hours.map(t => ({
            label: this.getLabel(t),
            value: epoch - toNow - (hour - t) * H_TO_MS,
        }));

        return ticks.map((tick, index) => (
            <Tick
                key={index}
                label={tick.label}
                value={tick.value}
                style={{}}
            />
        ));
    }

    getStyle() {
        const { toNow, timeScale } = this.props;

        return {
            right: toNow / (timeScale * H_TO_MS) * 100 + '%',
        };
    }
    
    render() {
        return (
            <div className='axis axis--time'>
                <div className='wrapper' style={this.getStyle()}>
                    {this.getTicks()}
                </div>
            </div>
        );
    }
}

export default AxisTime