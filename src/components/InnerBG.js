import React from 'react'
import * as DataTypes from '../constants/DataTypes'
import BGContainer from '../containers/BGContainer'
import './InnerBG.scss'

class InnerBG extends React.Component {
    
    constructor(props) {
        super(props)
        this.node = React.createRef()
    }

    componentDidMount() {
        this.updateDimensions()
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    updateDimensions = (e) => {
        const { width, height } = this.node.current.getBoundingClientRect()
        this.props.actions.updateInnerBGSize(width, height)
    }

    render() {
        return (
            <div ref={this.node} className='inner inner--bg'>
                <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
                    {this.props[DataTypes.DATA_BG].map((bg, index) => (
                        <BGContainer key={index} time={bg.time} value={bg.value} />
                    ))}
                </svg>
            </div>
        )
    }
}

export default InnerBG