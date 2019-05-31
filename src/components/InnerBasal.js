import React from 'react'
import './InnerBasal.scss'

class InnerBasal extends React.Component {
    componentDidMount() {
        this.props.actions.fetchBasals()
        this.props.actions.fetchTBs()
    }

    render() {
        return (
            <div className='inner inner--basal'></div>
        )
    }
}

export default InnerBasal