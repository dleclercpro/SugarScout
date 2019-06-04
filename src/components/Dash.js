import React from 'react'
import ButtonTimeScaleContainer from '../containers/ButtonTimeScaleContainer'
import './Dash.scss'

class Dash extends React.Component {
    render() {
        return (
            <section className='dash'>
                <div className='buttons-timescale'>
                    {this.props.timeScales.map((scale, index) => (
                        <ButtonTimeScaleContainer key={index} value={scale} />
                    ))}
                </div>
            </section>
        )
    }
}

export default Dash