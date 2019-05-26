import React from 'react'
import Tick from './Tick'
import './Axis.scss'

class Axis extends React.Component {
    
    constructor(props) {
        super(props)
        this.type = props.type
        this.state = props.state
    }

    getStyles() {
        if (this.type === 'x') {
            return {
                right: this.state.toNow / (this.state.scale * 60 * 60 * 1000) * 100 + '%'
            }
        }
    }
    
    render() {
        return (
            <div className={`axis axis--${this.type} ${this.state.scale ? 'axis--' + this.state.scale + 'h' : ''}`}>
                <div className='wrapper' style={this.getStyles()}>
                    {this.state.ticks.map((tick, index) => (
                        <Tick
                            key={index}
                            label={tick.label}
                            value={tick.value}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Axis