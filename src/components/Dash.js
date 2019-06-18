import React, { Component } from 'react'
import { getType } from 'components/BG'
import ButtonTimeScaleContainer from 'containers/ButtonTimeScaleContainer'
import * as Units from 'constants/Units'
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

    getLastBGDelta() {
        const bgs = this.props.bgs
        const nBGs = bgs.length
        return nBGs > 1 ? bgs[nBGs - 1].value - bgs[nBGs - 2].value : 0
    }

    getBGTrend() {
        const bgs = this.props.bgs
        const nBGs = bgs.length
        const dBGdt = nBGs >= BG.N_BGS_TREND ? lib.getLinearRegressionByLeastSquares(bgs.slice(nBGs - BG.N_BGS_TREND))[0] : null

        if (dBGdt === null) {
            return ''
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

    getLastISF() {
        const isfs = this.props.isfs
        const nISFs = isfs.length

        return nISFs ? isfs[nISFs - 1] : {
            time: -1,
            value: -1,
        }
    }

    getLastCSF() {
        const csfs = this.props.csfs
        const nCSFs = csfs.length

        return nCSFs ? csfs[nCSFs - 1] : {
            time: -1,
            value: -1,
        }
    }

    render() {
        const lastBG = this.getLastBG()
        const lastISF = this.getLastISF()
        const lastCSF = this.getLastCSF()

        return (
            <section className='dash'>
                <div className='wrapper'>
                    <div className='recent'>
                        <div className={`bg ${getType(lastBG.value)}`}>
                            <p className='value'>{lib.formatBG(lastBG.value)}</p>
                            <p className='trend'>
                                <span className='arrow'>{this.getBGTrend()}</span>
                                <span className='delta'>({lib.formatBGDelta(this.getLastBGDelta())})</span>
                            </p>
                        </div>
                        <p className='isf'>
                            <span className='title'>ISF:</span>
                            {' '}
                            {lib.formatISF(lastISF.value)}
                            {' '}
                            {Units.ISF}
                        </p>
                        <p className='csf'>
                            <span className='title'>CSF:</span>
                            {' '}
                            {lib.formatCSF(lastCSF.value)}
                            {' '}
                            {Units.CSF}
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