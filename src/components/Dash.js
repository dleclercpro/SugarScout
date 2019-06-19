import React from 'react'
import { getType } from 'components/BG'
import ButtonTimeScaleContainer from 'containers/ButtonTimeScaleContainer'
import * as Units from 'constants/Units'
import * as Time from 'constants/Time'
import * as dash from 'constants/Dash'
import * as lib from 'lib'
import 'components/Dash.scss'

const getPropOrDef = (prop, def) => prop ? prop : def

const Dash = (props) => {
    const bg = getPropOrDef(props.bg, dash.DEFAULT_BG)
    const dbg = getPropOrDef(props.dbg, dash.DEFAULT_DBG)
    const bgTrend = getPropOrDef(props.bgTrend, dash.DEFAULT_BG_TREND)
    const basal = getPropOrDef(props.basal, dash.DEFAULT_BASAL)
    const reservoir = getPropOrDef(props.reservoir, dash.DEFAULT_RESERVOIR)
    const iob = getPropOrDef(props.iob, dash.DEFAULT_IOB)
    const cob = getPropOrDef(props.cob, dash.DEFAULT_COB)
    const isf = getPropOrDef(props.isf, dash.DEFAULT_ISF)
    const csf = getPropOrDef(props.csf, dash.DEFAULT_CSF)
    const sage = getPropOrDef(props.sage, dash.DEFAULT_SENSOR_AGE)
    const cage = getPropOrDef(props.cage, dash.DEFAULT_CANULA_AGE)
    const battery = {
        pump: getPropOrDef(props.battery.pump, dash.DEFAULT_PUMP_BATTERY),
        cgm: getPropOrDef(props.battery.cgm, dash.DEFAULT_CGM_BATTERY),
    }

    const currentTime = props.now.getTime()
    const getAgeType = (time, maxAge) => time < currentTime - maxAge ? 'is-expired' : ''

    return (
        <section className='dash'>
            <div className='wrapper'>
                <div className='recent'>
                    <div className={`bg ${getType(bg.getValue())} ${getAgeType(bg.getTime(), Time.MAX_AGE_BG)}`}>
                        <p className='value'>{lib.formatBG(bg.getValue())}</p>
                        <p className='trend'>
                            <span className='arrow'>{bgTrend.getValue()}</span>
                            <span className='delta'>({lib.formatdBG(dbg.getValue())})</span>
                        </p>
                    </div>
                    <div className='general'>
                        <div className='insulin'>
                            <p className='basal'>
                                <span className='title'>Basal:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatBasal(basal.getValue())}
                                    {' '}
                                    {Units.BASAL}
                                </span>
                            </p>
                            <p className={`reservoir ${getAgeType(reservoir.getTime(), Time.MAX_AGE_RESERVOIR)}`}>
                                <span className='title'>R:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatReservoir(reservoir.getValue())}
                                    {' '}
                                    {Units.RESERVOIR}
                                </span>
                            </p>
                        </div>
                        <div className='on-board'>
                            <p className={`iob ${getAgeType(iob.getTime(), Time.MAX_AGE_IOB)}`}>
                                <span className='title'>IOB:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatIOB(iob.getValue())}
                                    {' '}
                                    {Units.IOB}
                                </span>
                            </p>
                            <p className={`cob ${getAgeType(cob.getTime(), Time.MAX_AGE_COB)}`}>
                                <span className='title'>COB:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatCOB(cob.getValue())}
                                    {' '}
                                    {Units.COB}
                                </span>
                            </p>
                        </div>
                        <div className='factors'>
                            <p className='isf'>
                                <span className='title'>ISF:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatISF(isf.getValue())}
                                    {' '}
                                    {Units.ISF}
                                </span>
                            </p>
                            <p className='csf'>
                                <span className='title'>CSF:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatCSF(csf.getValue())}
                                    {' '}
                                    {Units.CSF}
                                </span>
                            </p>
                        </div>
                        <div className='age'>
                            <p className={`sage ${getAgeType(sage.getTime(), Time.MAX_AGE_SAGE)}`}>
                                <span className='title'>SAGE:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatSAGE(sage.getValue())}
                                    {' '}
                                    {Units.SENSOR_AGE}
                                </span>
                            </p>
                            <p className={`cage ${getAgeType(cage.getTime(), Time.MAX_AGE_CAGE)}`}>
                                <span className='title'>CAGE:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatCAGE(cage.getValue())}
                                    {' '}
                                    {Units.CANULA_AGE}
                                </span>
                            </p>
                        </div>
                        <div className='battery'>
                            <p className={`pump ${getAgeType(battery.pump.getTime(), Time.MAX_AGE_PUMP_BATTERY)}`}>
                                <span className='title'>Pump Battery:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatPumpBattery(battery.pump.getValue())}
                                    {' '}
                                    {Units.PUMP_BATTERY}
                                </span>
                            </p>
                            <p className={`cgm ${getAgeType(battery.cgm.getTime(), Time.MAX_AGE_CGM_BATTERY)}`}>
                                <span className='title'>CGM Battery:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatCGMBattery(battery.cgm.getValue())}
                                    {' '}
                                    {Units.CGM_BATTERY}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='time'>
                    <div className='clock'>
                        {lib.convertEpochToFormatTime(currentTime, Time.FORMAT_SHORT)}
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