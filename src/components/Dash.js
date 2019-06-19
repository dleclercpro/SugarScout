import React from 'react'
import { getType } from 'components/BG'
import ButtonTimeScaleContainer from 'containers/ButtonTimeScaleContainer'
import * as Units from 'constants/Units'
import * as Time from 'constants/Time'
import * as dash from 'constants/Dash'
import * as lib from 'lib'
import 'components/Dash.scss'

const getPropOrDefault = (prop, def) => prop ? prop.value : def.value

const Dash = (props) => {
    const bg = getPropOrDefault(props.bg, dash.DEFAULT_BG)
    const dbg = getPropOrDefault(props.dbg, dash.DEFAULT_DBG)
    const bgTrend = getPropOrDefault(props.bgTrend, dash.DEFAULT_BG_TREND)
    const basal = getPropOrDefault(props.basal, dash.DEFAULT_BASAL)
    const reservoir = getPropOrDefault(props.reservoir, dash.DEFAULT_RESERVOIR)
    const iob = getPropOrDefault(props.iob, dash.DEFAULT_IOB)
    const cob = getPropOrDefault(props.cob, dash.DEFAULT_COB)
    const isf = getPropOrDefault(props.isf, dash.DEFAULT_ISF)
    const csf = getPropOrDefault(props.csf, dash.DEFAULT_CSF)
    const sage = getPropOrDefault(props.sage, dash.DEFAULT_SENSOR_AGE)
    const cage = getPropOrDefault(props.cage, dash.DEFAULT_CANULA_AGE)
    const battery = {
        pump: getPropOrDefault(props.battery.pump, dash.DEFAULT_PUMP_BATTERY),
        cgm: getPropOrDefault(props.battery.cgm, dash.DEFAULT_CGM_BATTERY),
    }

    return (
        <section className='dash'>
            <div className='wrapper'>
                <div className='recent'>
                <div className={`bg ${getType(bg)}`}>
                        <p className='value'>{lib.formatBG(bg)}</p>
                        <p className='trend'>
                            <span className='arrow'>{bgTrend}</span>
                            <span className='delta'>({lib.formatdBG(dbg)})</span>
                        </p>
                    </div>
                    <div className='general'>
                        <div className='insulin'>
                            <p className='basal'>
                                <span className='title'>Basal:</span>
                                {' '}
                                {lib.formatBasal(basal)}
                                {' '}
                                {Units.BASAL}
                            </p>
                            <p className='reservoir'>
                                <span className='title'>R:</span>
                                {' '}
                                {lib.formatReservoir(reservoir)}
                                {' '}
                                {Units.RESERVOIR}
                            </p>
                        </div>
                        <div className='on-board'>
                            <p className='iob'>
                                <span className='title'>IOB:</span>
                                {' '}
                                {lib.formatIOB(iob)}
                                {' '}
                                {Units.IOB}
                            </p>
                            <p className='cob'>
                                <span className='title'>COB:</span>
                                {' '}
                                {lib.formatCOB(cob)}
                                {' '}
                                {Units.COB}
                            </p>
                        </div>
                        <div className='factors'>
                            <p className='isf'>
                                <span className='title'>ISF:</span>
                                {' '}
                                {lib.formatISF(isf)}
                                {' '}
                                {Units.ISF}
                            </p>
                            <p className='csf'>
                                <span className='title'>CSF:</span>
                                {' '}
                                {lib.formatCSF(csf)}
                                {' '}
                                {Units.CSF}
                            </p>
                        </div>
                        <div className='age'>
                            <p className='sage'>
                                <span className='title'>SAGE:</span>
                                {' '}
                                {lib.formatSAGE(sage)}
                                {' '}
                                {Units.SENSOR_AGE}
                            </p>
                            <p className='cage'>
                                <span className='title'>CAGE:</span>
                                {' '}
                                {lib.formatCAGE(cage)}
                                {' '}
                                {Units.CANULA_AGE}
                            </p>
                        </div>
                        <div className='battery'>
                            <p className='pump'>
                                <span className='title'>Pump Battery:</span>
                                {' '}
                                {lib.formatPumpBattery(battery.pump)}
                                {' '}
                                {Units.PUMP_BATTERY}
                            </p>
                            <p className='cgm'>
                                <span className='title'>CGM Battery:</span>
                                {' '}
                                {lib.formatCGMBattery(battery.cgm)}
                                {' '}
                                {Units.CGM_BATTERY}
                            </p>
                        </div>
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