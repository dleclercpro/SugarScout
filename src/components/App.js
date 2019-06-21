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
        this.timerData = setInterval(this.fetchAllData, Time.REFRESH_DATA_RATE)
        this.timer = setInterval(this.props.actions.updateTime, Time.REFRESH_APP_RATE)
        this.fetchAllData()        
    }

    componentWillUnmount() {
        clearInterval(this.timerData)
        clearInterval(this.timer)
    }

    fetchAllData = () => {
        Promise.all([
            this.props.actions.fetchDataBG(),
            this.props.actions.fetchDataPump(),
            this.props.actions.fetchDataTreatment(),
            this.props.actions.fetchDataHistory()
        ])
        .then(() => {
            this.props.actions.updateLastDataFetch()
        })
        .catch(error => {
            console.log('Could not fetch all data:\n' + error)
        })
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