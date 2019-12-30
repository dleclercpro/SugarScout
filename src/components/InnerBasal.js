import React, { Component, createRef } from 'react';
import NetBasalContainer from 'containers/NetBasalContainer';
import BolusContainer from 'containers/BolusContainer';
import IOBContainer from 'containers/IOBContainer';
import 'components/InnerBasal.scss';

class InnerBasal extends Component {

    constructor(props) {
        super(props);
        this.node = createRef();
    }

    componentDidMount() {
        this.updateSize();
        window.addEventListener('resize', this.updateSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize);
    }

    updateSize = (e) => {
        const { updateInnerBasalSize } = this.props.actions;
        const { width, height } = this.node.current.getBoundingClientRect();
        
        updateInnerBasalSize(width, height);
    }

    render() {
        const { width, height, netBasals, boluses, iobs } = this.props;

        return (
            <section ref={this.node} className='inner inner--basal'>
                <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                    {netBasals.map((nb, index) => (
                        <NetBasalContainer key={index} time={nb.time} value={nb.value} duration={nb.duration} />
                    ))}
                    {boluses.map((b, index) => (
                        <BolusContainer key={index} time={b.time} value={b.value} isZero />
                    ))}
                    {iobs.map((iob, index) => (
                        <IOBContainer key={index} time={iob.time} value={iob.value} />
                    ))}
                </svg>
            </section>
        );
    }
}

export default InnerBasal;