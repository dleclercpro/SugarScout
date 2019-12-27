import React, { Component, createRef } from 'react';
import * as fmt from 'fmt';
import 'components/Bubble.scss';

class Bubble extends Component {

    constructor(props) {
        super(props);
        this.node = createRef();
    }

    componentDidUpdate(prevProps) {
        const { status } = this.props;
        
        if (status === 'visible' && prevProps.status === 'hidden') {
            this.updateSize();
        }
    }

    updateSize = (e) => {
        const { resizeBubble } = this.props.actions;
        const { width, height } = this.node.current.getBoundingClientRect();
        
        resizeBubble(width, height);
    }

    render() {
        const { position, target, status, time, info, duration } = this.props;

        return (
            <div ref={this.node} className={`bubble ${target} is-${status}`} style={position}>
                {info &&
                    <p className='info'>
                        <span className='value'>{info.value}</span>
                        {' '}
                        <span className='units'>{info.units}</span>
                    </p>
                }
                {duration &&
                    <p className='duration'>
                        [
                            <span className='value'>{duration.value}</span>
                            {' '}
                            <span className='units'>{duration.units}</span>
                        ]
                    </p>
                }
                {time &&
                    <p className='time'>
                        {fmt.time(time)}
                    </p>
                }
            </div>
        );
    }
}

export default Bubble;