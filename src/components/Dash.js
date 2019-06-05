import React from 'react'
import { getType } from './BG'
import ButtonTimeScaleContainer from '../containers/ButtonTimeScaleContainer'
import './Dash.scss'

class Dash extends React.Component {
    render() {
        return (
            <section className='dash'>
                <div className='time'>
                    <div className='clock'>
                        {this.props.now}
                    </div>
                    <div className='buttons-timescale'>
                        {this.props.timeScales.map((scale, index) => (
                            <ButtonTimeScaleContainer key={index} value={scale} />
                        ))}
                    </div>
                </div>
                <div className={`recent ${getType(this.props.lastBG.value)}`}>
                    <p className='bg'>{this.props.lastBG.value}</p>
                    <p className='trend'>
                        <span className='arrow'>→</span>
                        <span className='delta'>({this.props.lastDelta})</span>
                    </p>
                </div>
            </section>
        )
    }
}

export default Dash