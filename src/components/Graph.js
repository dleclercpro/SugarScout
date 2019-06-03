import React from 'react'
import Corner from './Corner'
import InnerBGContainer from '../containers/InnerBGContainer'
import InnerBasalContainer from '../containers/InnerBasalContainer'
import AxisTimeContainer from '../containers/AxisTimeContainer'
import AxisBGContainer from '../containers/AxisBGContainer'
import AxisBasalContainer from '../containers/AxisBasalContainer'
import './Graph.scss'

class Graph extends React.Component {

    componentDidMount() {
        this.props.actions.fetchBGs()
        this.props.actions.fetchBasals()
        this.props.actions.fetchTBs()
    }

    render() {
        return (
            <div className={`graph graph--${this.props.timeScale}-h`}>
                <InnerBGContainer />
                <InnerBasalContainer />
                <Corner />
                <AxisTimeContainer />
                <AxisBGContainer />
                <AxisBasalContainer />
            </div>
        )
    }
}

export default Graph