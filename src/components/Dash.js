import React from 'react'
import { getType } from 'components/BG'
import ButtonTimeScaleContainer from 'containers/ButtonTimeScaleContainer'
import * as Units from 'constants/Units'
import * as Time from 'constants/Time'
import * as lib from 'lib'
import 'components/Dash.scss'

const Dash = (props) => {
    const currentBG = props.bg ? props.bg.value : -1
    const currentdBG = props.dbg ? props.dbg : 0
    const currentBasal = props.basal ? props.basal.value : -1
    const currentISF = props.isf ? props.isf.value : -1
    const currentCSF = props.csf ? props.csf.value : -1

    return (
        <section className='dash'>
            <div className='wrapper'>
                <div className='recent'>
                    <div className={`bg ${getType(currentBG)}`}>
                        <p className='value'>{lib.formatBG(currentBG)}</p>
                        <p className='trend'>
                            <span className='arrow'>{props.bgTrend}</span>
                            <span className='delta'>({lib.formatBGDelta(currentdBG)})</span>
                        </p>
                    </div>
                    <div className='pump'>
                        <p className='basal'>
                            <span className='title'>Basal:</span>
                            {' '}
                            {lib.formatBasal(currentBasal)}
                            {' '}
                            {Units.BASAL}
                        </p>
                        <p className='isf'>
                            <span className='title'>ISF:</span>
                            {' '}
                            {lib.formatISF(currentISF)}
                            {' '}
                            {Units.ISF}
                        </p>
                        <p className='csf'>
                            <span className='title'>CSF:</span>
                            {' '}
                            {lib.formatCSF(currentCSF)}
                            {' '}
                            {Units.CSF}
                        </p>
                    </div>
                </div>
                <div className='time'>
                    <div className='clock'>
                        {lib.convertEpochToFormatTime(props.now.getTime(), Time.FORMAT_SHORT)}
                    </div>
                    <div className='last-fetch'>
                        {lib.convertEpochToFormatTime(props.lastFetch.getTime(), Time.FORMAT_SHORT)}
                    </div>
                    <div className='buttons-timescale'>
                        {props.timeScales.map((scale, index) => (
                            <ButtonTimeScaleContainer key={index} value={scale} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dash