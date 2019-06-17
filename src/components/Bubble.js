import React, { Component, createRef } from 'react'
import * as lib from 'lib'
import 'components/Bubble.scss'

class Bubble extends Component {

    constructor(props) {
        super(props)
        this.node = createRef()
    }

    componentDidUpdate(prevProps) {

        // Only update dimensions when bubble appears
        if (this.props.status === 'visible' && prevProps.status === 'hidden') {
            this.updateDimensions()
        }
    }

    updateDimensions = (e) => {
        const { width, height } = this.node.current.getBoundingClientRect()
        this.props.actions.updateBubbleSize(width, height)
    }

    render() {
        return (
            <div ref={this.node} className={`bubble ${this.props.target} is-${this.props.status}`} style={this.props.position}>
                {this.props.info &&
                    <p className='info'>
                        <span className='value'>{this.props.info.value}</span>
                        {' '}
                        <span className='units'>{this.props.info.units}</span>
                    </p>
                }
                {this.props.duration &&
                    <p className='duration'>
                        [
                            <span className='value'>{this.props.duration.value}</span>
                            {' '}
                            <span className='units'>{this.props.duration.units}</span>
                        ]
                    </p>
                }
                {this.props.time &&
                    <p className='time'>
                        {lib.convertEpochToFormatTime(this.props.time)}
                    </p>
                }
            </div>
        )
    }
}

export default Bubble