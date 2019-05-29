import React from 'react'
import BubbleContainer from '../containers/BubbleContainer';
import BGContainer from '../containers/BGContainer';
import ButtonTimeScaleContainer from '../containers/ButtonTimeScaleContainer';
import './InnerBG.scss'

class InnerBG extends React.Component {
    componentDidMount() {
        this.props.actions.fetchBGs()
    }

    render() {
        return (
            <div className='inner inner--bg'>
                <BubbleContainer />
                
                {this.props.scales.map((scale, index) => (
                    <ButtonTimeScaleContainer key={index} scale={scale} />
                ))}
        
                {this.props.bgs.map((bg, index) => (
                    <BGContainer key={index} time={bg.time} value={bg.value} />
                ))}                
            </div>
        )
    }
}

export default InnerBG