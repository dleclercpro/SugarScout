import React, { Component } from 'react'
import DashContainer from 'containers/DashContainer'
import GraphContainer from 'containers/GraphContainer'
import BubbleContainer from 'containers/BubbleContainer'
import * as Time from 'constants/Time'
import 'components/App.scss'

class App extends Component {

    constructor(props) {
        super(props)
        this.timer = null
        this.timerData = null
    }

    componentDidMount() {
        this.timerData = setInterval(this.fetchData, Time.REFRESH_DATA_RATE)
        this.timer = setInterval(this.props.actions.updateTime, Time.REFRESH_APP_RATE)
        this.fetchData()        
    }

    componentWillUnmount() {
        clearInterval(this.timerData)
        clearInterval(this.timer)
    }

    fetchData = () => {
        this.props.actions.updateLastDataFetch()
        this.props.actions.fetchBGData()
        this.props.actions.fetchPumpData()
        this.props.actions.fetchTreatmentData()
        this.props.actions.fetchHistoryData()
    }

    render() {
        return (
            <div className='app'>
                <BubbleContainer />
                <DashContainer />
                <GraphContainer />
            </div>
        )
    }
}

export default App