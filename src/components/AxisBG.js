import React, { Component } from 'react';
import Tick from 'components/Tick';
import { getArrayRange } from 'lib';
import 'components/AxisBG.scss';

class AxisBG extends Component {

    getTicks() {
        const { ticks } = this.props;
        
        const range = getArrayRange(ticks);
        const labeledTicks = ticks.map(y => ({ label: y, value: y }));
        const visibleTicks = labeledTicks.slice(0, -1);

        return visibleTicks.map((tick, index) => {
            const nextTick = labeledTicks[index + 1];
            const size = Math.abs(nextTick.value - tick.value);
            const style = {
                height: size / (range[1] - range[0]) * 100 + '%',
            };

            return (
                <Tick
                    key={index}
                    label={tick.label}
                    value={tick.value}
                    style={style}
                />
            );
        });
    }
    
    render() {
        return (
            <div className='axis axis--bg'>
                <div className='wrapper'>
                    {this.getTicks()}
                </div>
            </div>
        );
    }
}

export default AxisBG