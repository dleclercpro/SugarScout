import React, { Component } from 'react'
import { getType } from './BG'
import ButtonTimeScaleContainer from 'containers/ButtonTimeScaleContainer'
import * as Time from 'constants/Time'
import * as BG from 'constants/BG'
import * as lib from 'lib'
import 'components/Dash.scss'

class Dash extends Component {

    getLastBG() {
        const bgs = this.props.bgs
        const nBGs = bgs.length
        return nBGs ? bgs[nBGs - 1] : {
            time: -1,
            value: -1,
        }
    }

    getLastDelta() {
        const bgs = this.props.bgs
        const nBGs = bgs.length
        return nBGs > 1 ? bgs[nBGs - 1].value - bgs[nBGs - 2].value : 0
    }

    getTrend() {
        const bgs = this.props.bgs
        const nBGs = bgs.length
        const dBGdt = nBGs >= BG.N_BGS_TREND ? lib.getLinearRegressionByLeastSquares(bgs.slice(nBGs - BG.N_BGS_TREND))[0] : null

        if (dBGdt === null) {
            return
        }

        if (dBGdt < BG.TREND_DOUBLE_90_DOWN_MMOL_L_M) {
            return '↓↓'
        }

        if (BG.TREND_DOUBLE_90_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_90_DOWN_MMOL_L_M) {
            return '↓'
        }

        if (BG.TREND_90_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_45_DOWN_MMOL_L_M) {
            return '↘'
        }

        if (BG.TREND_45_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_45_UP_MMOL_L_M) {
            return '→'
        }

        if (BG.TREND_45_UP_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_90_UP_MMOL_L_M) {
            return '↗'
        }

        if (BG.TREND_90_UP_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_DOUBLE_90_UP_MMOL_L_M) {
            return '↑'
        }

        if (BG.TREND_DOUBLE_90_UP_MMOL_L_M <= dBGdt) {
            return '↑↑'
        }
    }

    render() {
        const lastBG = this.getLastBG()

        return (
            <section className='dash'>
                <div className='wrapper'>
                    <div className={`recent ${getType(lastBG.value)}`}>
                        <p className='bg'>{lib.formatBG(lastBG.value)}</p>
                        <p className='trend'>
                            <span className='arrow'>{this.getTrend()}</span>
                            <span className='delta'>({lib.formatBGDelta(this.getLastDelta())})</span>
                        </p>
                    </div>
                    <div className='time'>
                        <div className='clock'>
                            {lib.convertEpochToFormatTime(this.props.now.getTime(), Time.FORMAT_SHORT)}
                        </div>
                        <div className='last-fetch'>
                            {lib.convertEpochToFormatTime(this.props.lastFetch.getTime(), Time.FORMAT_SHORT)}
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