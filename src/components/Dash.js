import React from 'react'
import { getType } from './BG'
import ButtonTimeScaleContainer from '../containers/ButtonTimeScaleContainer'
import * as lib from '../lib'
import './Dash.scss'

class Dash extends React.Component {
    render() {
        return (
            <section className='dash'>
                <div className='wrapper'>
                    <div className={`recent ${getType(this.props.lastBG.value)}`}>
                        <p className='bg'>{lib.formatBG(this.props.lastBG.value)}</p>
                        <p className='trend'>
                            <span className='arrow'>→</span>
                            <span className='delta'>({lib.formatBGDelta(this.props.lastDelta)})</span>
                        </p>
                    </div>
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
                </div>
            </section>
        )
    }
}

export default Dash