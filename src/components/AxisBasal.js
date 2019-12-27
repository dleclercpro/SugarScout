import React, { Component } from 'react';
import Tick from 'components/Tick';
import { getArrayRange } from 'lib';
import 'components/AxisBasal.scss';

class AxisBasal extends Component {

    getTickStyle(size, range) {
        return {
            height: size / (range[1] - range[0]) * 100 + '%',
        };
    }

    getTicks() {
        const { ticks } = this.props;
        
        const range = getArrayRange(ticks);
        const labeledTicks = ticks.map(y => ({ label: y, value: y }));
        const visibleTicks = labeledTicks.slice(0, -1);

        return visibleTicks.map((tick, index) => {
            const nextTick = labeledTicks[index + 1];
            const size = Math.abs(nextTick.value - tick.value);

            return (
                <Tick
                    key={index}
                    label={tick.label}
                    value={tick.value}
                    style={this.getTickStyle(size, range)}
                />
            );
        });
    }
    
    render() {
        return (
            <div className='axis axis--basal'>
                <div className='wrapper'>
                    {this.getTicks()}
                </div>
            </div>
        );
    }
}

export default AxisBasal;