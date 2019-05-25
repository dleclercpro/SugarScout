import React from 'react'
import './Graph.scss'

class Graph extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
  
    render() {
        return (
            <div className="graph"></div>
        )    
    }
}

export default Graph