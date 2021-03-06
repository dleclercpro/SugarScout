import React, { Component } from 'react';
import DashContainer from 'containers/DashContainer';
import GraphContainer from 'containers/GraphContainer';
import BubbleContainer from 'containers/BubbleContainer';
import { REFRESH_APP_RATE, REFRESH_DATA_RATE } from 'constants/Time';
import 'components/App.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timers: {
                app: null,
                data: null,
            },
        }
    }

    componentDidMount() {
        const { updateTime } = this.props.actions;

        this.setState({
            timers: {
                app: setInterval(updateTime, REFRESH_APP_RATE),
                data: setInterval(this.fetchData, REFRESH_DATA_RATE),
            },
        });

        this.fetchData();
    }

    componentWillUnmount() {
        const { timers } = this.state;

        for (const timer of Object.values(timers)) {
            clearInterval(timer);
        }
    }

    fetchData = () => {
        const {
            fetchBG,
            fetchPump,
            fetchTreatment,
            fetchHistory,
            updateLastFetchTime
        } = this.props.actions;

        Promise.all([
            fetchBG(),
            fetchPump(),
            fetchTreatment(),
            fetchHistory()
        ])
        .then(() => {
            updateLastFetchTime();
        })
        .catch(error => {
            console.log('Could not fetch all data:\n' + error);
        });
    }

    render() {
        return (
            <div className='app'>
                <BubbleContainer />
                <DashContainer />
                <GraphContainer />
            </div>
        );
    }
}

export default App;