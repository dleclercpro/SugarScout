import React from 'react'
import * as lib from '../lib'
import './Bubble.scss'

class Bubble extends React.Component {
    constructor(props) {
        super(props)
        this.node = React.createRef()
    }

    fixPosition() {
        const el = this.node.current
        const [width, height] = [el.clientWidth, el.clientHeight]
        const [parentWidth, parentHeight] = [el.parentNode.clientWidth, el.parentNode.clientHeight]
        const [offsetRight, offsetTop] = [parentWidth - el.offsetLeft - width, el.offsetTop]
        return {
            ...this.props.position,
            right: offsetRight >= 0 ? this.props.position.right : (width / 2) / parentWidth * 100 + '%',
        }
    }

    render() {
        return (
            <div ref={this.node} className={`bubble ${this.props.status === 'visible' ? 'is-active' : ''}`} style={this.props.position}>
                <p className='info'>{this.props.info}</p>
                <p className='time'>{lib.convertEpochToFormattedTime(this.props.t)}</p>
            </div>
        )
    }
}

export default Bubble