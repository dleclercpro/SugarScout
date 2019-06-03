import React from 'react'
import * as DataTypes from '../constants/DataTypes'
import BGContainer from '../containers/BGContainer'
import ButtonTimeScaleContainer from '../containers/ButtonTimeScaleContainer'
import './InnerBG.scss'

class InnerBG extends React.Component {
    
    constructor(props) {
        super(props)
        this.node = React.createRef()
    }

    componentDidMount() {
        const pos = this.node.current.getBoundingClientRect()
        this.props.actions.updateInnerBGSize(pos.width, pos.height)
    }

    render() {
        return (
            <div ref={this.node} className='inner inner--bg'>
                <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
                    {this.props[DataTypes.DATA_BG].map((bg, index) => (
                        <BGContainer key={index} time={bg.time} value={bg.value} />
                    ))}
                </svg>

                <div className='buttons-timescale'>
                    {this.props.timeScales.map((scale, index) => (
                        <ButtonTimeScaleContainer key={index} value={scale} />
                    ))}
                </div>
            </div>
        )
    }
}

export default InnerBG