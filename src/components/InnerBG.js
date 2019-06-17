import React, { Component, createRef } from 'react'
import BGContainer from 'containers/BGContainer'
import 'components/InnerBG.scss'

class InnerBG extends Component {
    
    constructor(props) {
        super(props)
        this.node = createRef()
    }

    componentDidMount() {
        this.updateSize()
        window.addEventListener('resize', this.updateSize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateSize)
    }

    updateSize = (e) => {
        const { width, height } = this.node.current.getBoundingClientRect()
        this.props.actions.updateInnerBGSize(width, height)
    }

    render() {
        return (
            <div ref={this.node} className='inner inner--bg'>
                <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
                    {this.props.bgs.map((bg, index) => (
                        <BGContainer key={index} time={bg.time} value={bg.value} />
                    ))}
                </svg>
            </div>
        )
    }
}

export default InnerBG