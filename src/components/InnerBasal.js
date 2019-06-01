import React from 'react'
import * as DataTypes from '../constants/DataTypes'
import TBContainer from '../containers/TBContainer'
import './InnerBasal.scss'

class InnerBasal extends React.Component {
    componentDidMount() {
        this.props.actions.fetchBasals()
        this.props.actions.fetchTBs()
    }

    getStyles() {
        return {
            right: (this.props.now - this.props.lastTBTime) / (this.props.timeScale * 60 * 60 * 1000) * 100 + '%'
        }
    }

    render() {
        return (
            <div className='inner inner--basal'>
                <div className='wrapper wrapper--tb' style={this.getStyles()}>
                    {this.props[DataTypes.DATA_TB].map((tb, index) => (
                        <TBContainer key={index} time={tb.time} value={tb.value} duration={tb.duration} />
                    ))}
                </div>
            </div>
        )
    }
}

export default InnerBasal