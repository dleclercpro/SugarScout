import React, { Component, createRef } from 'react'
import NetBasalContainer from 'containers/NetBasalContainer'
import BolusContainer from 'containers/BolusContainer'
import 'components/InnerBasal.scss'

class InnerBasal extends Component {

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
        this.props.actions.updateInnerBasalSize(width, height)
    }

    render() {
        return (
            <section ref={this.node} className='inner inner--basal'>
                <svg width={this.props.width} height={this.props.height} viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
                    {this.props.netBasals.map((nb, index) => (
                        <NetBasalContainer key={index} time={nb.time} value={nb.value} duration={nb.duration} />
                    ))}
                    {this.props.boluses.map((b, index) => (
                        <BolusContainer key={index} time={b.time} value={b.value} />
                    ))}
                </svg>
            </section>
        )
    }
}

export default InnerBasal