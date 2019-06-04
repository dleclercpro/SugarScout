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
        const pos = this.node.current.getBoundingClientRect()
        this.props.actions.updateInnerBasalSize(pos.width, pos.height)
    }

    render() {
        return (
            <div ref={this.node} className='inner inner--basal'>
                <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
                    {this.props[DataTypes.DATA_TB].map((tb, index) => (
                        <TBContainer key={index} time={tb.time} value={tb.value} duration={tb.duration} />
                    ))}
                </svg>
            </div>
        )
    }
}

export default InnerBasal