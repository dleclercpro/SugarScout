import React from 'react'
import InnerBGContainer from '../containers/InnerBGContainer'
import InnerBasalContainer from '../containers/InnerBasalContainer'
import AxisTimeContainer from '../containers/AxisTimeContainer'
import AxisBGContainer from '../containers/AxisBGContainer'
import AxisBasalContainer from '../containers/AxisBasalContainer'
import Corner from './Corner'
import './Graph.scss'

class Graph extends React.Component {

    componentDidMount() {
        this.props.actions.fetchBGs()
        this.props.actions.fetchBasals()
        this.props.actions.fetchTBs()
    }

    render() {
        return (
            <main className={`graph graph--${this.props.timeScale}-h`}>
                <section className='graph-basal'>
                    <InnerBasalContainer />
                    <AxisBasalContainer />
                </section>
                <section className='graph-bg'>
                    <InnerBGContainer />
                    <AxisBGContainer />
                </section>
                <AxisTimeContainer />
                <Corner />
            </main>
        )
    }
}

export default Graph