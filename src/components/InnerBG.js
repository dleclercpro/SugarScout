import React from 'react'
import * as DataTypes from '../constants/DataTypes'
import BGContainer from '../containers/BGContainer'
import ButtonTimeScaleContainer from '../containers/ButtonTimeScaleContainer'
import './InnerBG.scss'

class InnerBG extends React.Component {
    componentDidMount() {
        this.props.actions.fetchBGs()
    }

    render() {
        return (
            <div className='inner inner--bg'>                
                {this.props.timeScales.map((scale, index) => (
                    <ButtonTimeScaleContainer key={index} value={scale} />
                ))}
        
                {this.props[DataTypes.DATA_BG].map((bg, index) => (
                    <BGContainer key={index} time={bg.time} value={bg.value} />
                ))}
            </div>
        )
    }
}

export default InnerBG