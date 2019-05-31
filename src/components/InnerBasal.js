import React from 'react'
import * as DataTypes from '../constants/DataTypes'
import TBContainer from '../containers/TBContainer'
import './InnerBasal.scss'

class InnerBasal extends React.Component {
    componentDidMount() {
        this.props.actions.fetchBasals()
        this.props.actions.fetchTBs()
    }

    render() {
        return (
            <div className='inner inner--basal'>
                {this.props[DataTypes.DATA_TB].map((tb, index) => (
                    <TBContainer key={index} time={tb.time} value={tb.value} duration={tb.duration} />
                ))}
            </div>
        )
    }
}

export default InnerBasal