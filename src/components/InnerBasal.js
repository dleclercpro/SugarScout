import React from 'react'
import * as DataTypes from '../constants/DataTypes'
import TBContainer from '../containers/TBContainer'
import './InnerBasal.scss'

class InnerBasal extends React.Component {

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
        this.props.actions.updateInnerBasalSize(width, height)
    }

    render() {
        return (
            <section ref={this.node} className='inner inner--basal'>
                <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
                    {this.props[DataTypes.DATA_TB].map((tb, index) => (
                        <TBContainer key={index} time={tb.time} value={tb.value} duration={tb.duration} />
                    ))}
                </svg>
            </section>
        )
    }
}

export default InnerBasal