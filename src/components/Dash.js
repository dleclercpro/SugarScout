import React from 'react'
import { getType } from 'components/BG'
import ButtonTimeScaleContainer from 'containers/ButtonTimeScaleContainer'
import * as Units from 'constants/Units'
import * as Time from 'constants/Time'
import * as dash from 'constants/Dash'
import * as lib from 'lib'
import 'components/Dash.scss'

const getReservoirType = value => lib.getLevelType(value, dash.RESERVOIR_LEVELS)
const getPumpBatteryType = value => lib.getLevelType(value, dash.PUMP_BATTERY_LEVELS)
const getCGMBatteryType = value => lib.getLevelType(value, dash.CGM_BATTERY_LEVELS)
const getSAGEType = value => lib.getAgeType(value, dash.SENSOR_AGES)
const getCAGEType = value => lib.getAgeType(value, dash.CANULA_AGES)

const Dash = (props) => {
    return (
        <section className='dash'>
            <div className='wrapper'>
                <div className='recent'>
                    <div className={`bg ${getType(props.bg.getValue())} ${props.isExpired(props.bg.getTime(), Time.MAX_AGE_BG)}`}>
                        <p className='value'>{lib.formatBG(props.bg.getValue())}</p>
                        <p className='trend'>
                            <span className='arrow'>{props.bgTrend.getValue()}</span>
                            <span className='delta'>({lib.formatdBG(props.dbg.getValue())})</span>
                        </p>
                    </div>
                    <div className='general'>
                        <div className='insulin'>
                            <p className='basal'>
                                <span className='title'>Basal:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatBasal(props.basal.getValue())}
                                    {' '}
                                    {Units.BASAL}
                                </span>
                            </p>
                            <p className={`reservoir ${props.isExpired(props.reservoir.getTime(), Time.MAX_AGE_RESERVOIR)} ${getReservoirType(props.reservoir.getValue())}`}>
                                <span className='title'>R:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatReservoir(props.reservoir.getValue())}
                                    {' '}
                                    {Units.RESERVOIR}
                                </span>
                            </p>
                        </div>
                        <div className='on-board'>
                            <p className={`iob ${props.isExpired(props.iob.getTime(), Time.MAX_AGE_IOB)}`}>
                                <span className='title'>IOB:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatIOB(props.iob.getValue())}
                                    {' '}
                                    {Units.IOB}
                                </span>
                            </p>
                            <p className={`cob ${props.isExpired(props.cob.getTime(), Time.MAX_AGE_COB)}`}>
                                <span className='title'>COB:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatCOB(props.cob.getValue())}
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
                                    {lib.formatISF(props.isf.getValue())}
                                    {' '}
                                    {Units.ISF}
                                </span>
                            </p>
                            <p className='csf'>
                                <span className='title'>CSF:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatCSF(props.csf.getValue())}
                                    {' '}
                                    {Units.CSF}
                                </span>
                            </p>
                        </div>
                        <div className='age'>
                            <p className={`sage ${props.sage === dash.DEFAULT_SENSOR_AGE ? 'is-invalid' : ''} ${getSAGEType(props.sage.getValue())}`}>
                                <span className='title'>SAGE:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatAgeDays(props.sage.getValue())}
                                    {' '}
                                    {Units.AGE_DAYS}
                                    {' '}
                                    {lib.formatAgeHours(props.sage.getValue())}
                                    {' '}
                                    {Units.AGE_HOURS}
                                </span>
                            </p>
                            <p className={`cage ${props.cage === dash.DEFAULT_CANULA_AGE ? 'is-invalid' : ''} ${getCAGEType(props.cage.getValue())}`}>
                                <span className='title'>CAGE:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatAgeDays(props.cage.getValue())}
                                    {' '}
                                    {Units.AGE_DAYS}
                                    {' '}
                                    {lib.formatAgeHours(props.cage.getValue())}
                                    {' '}
                                    {Units.AGE_HOURS}
                                </span>
                            </p>
                        </div>
                        <div className='battery'>
                            <p className={`pump ${props.isExpired(props.battery.pump.getTime(), Time.MAX_AGE_PUMP_BATTERY)} ${getPumpBatteryType(props.battery.pump.getValue())}`}>
                                <span className='title'>Pump Battery:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatPumpBattery(props.battery.pump.getValue())}
                                    {' '}
                                    {Units.PUMP_BATTERY}
                                </span>
                            </p>
                            <p className={`cgm ${props.isExpired(props.battery.cgm.getTime(), Time.MAX_AGE_CGM_BATTERY)} ${getCGMBatteryType(props.battery.cgm.getValue())}`}>
                                <span className='title'>CGM Battery:</span>
                                {' '}
                                <span className='value'>
                                    {lib.formatCGMBattery(props.battery.cgm.getValue())}
                                    {' '}
                                    {Units.CGM_BATTERY}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='time'>
                    <div className='clock'>
                        {lib.convertEpochToFormatTime(props.now.getTime(), Time.FORMAT_SHORT)}
                    </div>
                    <div className={`last-fetch ${props.isExpired(props.lastFetch.getTime(), Time.MAX_AGE_LAST_FETCH)}`}>
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