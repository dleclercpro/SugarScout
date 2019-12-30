import React, { Component, createRef } from 'react';
import BGContainer from 'containers/BGContainer';
import 'components/InnerBG.scss';

class InnerBG extends Component {
    
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
        const { updateInnerBGSize } = this.props.actions;
        const { width, height } = this.node.current.getBoundingClientRect();
        
        updateInnerBGSize(width, height);
    }

    render() {
        const { width, height, bgs } = this.props;

        return (
            <div ref={this.node} className='inner inner--bg'>
                <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
                    {bgs.map((bg, index) => (
                        <BGContainer key={index} time={bg.time} value={bg.value} />
                    ))}
                </svg>
            </div>
        );
    }
}

export default InnerBG;