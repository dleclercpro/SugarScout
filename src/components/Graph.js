import React from 'react'
import InnerBGContainer from 'containers/InnerBGContainer'
import InnerBasalContainer from 'containers/InnerBasalContainer'
import AxisTimeContainer from 'containers/AxisTimeContainer'
import AxisBGContainer from 'containers/AxisBGContainer'
import AxisBasalContainer from 'containers/AxisBasalContainer'
import Corner from 'components/Corner'
import 'components/Graph.scss'

const Graph = (props) => (
    <main className={`graph graph--${props.timeScale}-h`}>
        <section className='graph-bg'>
            <InnerBGContainer />
            <AxisBGContainer />
        </section>
        <section className='graph-basal'>
            <InnerBasalContainer />
            <AxisBasalContainer />
        </section>
        <AxisTimeContainer />
        <Corner />
    </main>
)

export default Graph