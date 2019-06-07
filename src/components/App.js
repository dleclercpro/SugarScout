import React from 'react'
import DashContainer from 'containers/DashContainer'
import GraphContainer from 'containers/GraphContainer'
import BubbleContainer from 'containers/BubbleContainer'
import * as Time from 'constants/Time'
import 'components/App.scss'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.timer = null
    }

    componentDidMount() {
        this.timer = setInterval(
            () => {
                this.props.actions.updateTime(new Date())
                this.props.actions.updateTimeToNow()
            },
            Time.REFRESH_RATE
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
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