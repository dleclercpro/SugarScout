import React from 'react'
import { getType } from 'components/BG'
import ButtonTimeScaleContainer from 'containers/ButtonTimeScaleContainer'
import * as Units from 'constants/Units'
import * as Time from 'constants/Time'
import * as lib from 'lib'
import 'components/Dash.scss'

const Dash = (props) => (
    <section className='dash'>
        <div className='wrapper'>
            <div className='recent'>
                <div className={`bg ${getType(props.bg)}`}>
                    <p className='value'>{lib.formatBG(props.bg)}</p>
                    <p className='trend'>
                        <span className='arrow'>{props.bgTrend}</span>
                        <span className='delta'>({lib.formatdBG(props.dbg)})</span>
                    </p>
                </div>
                <div className='general'>
                    <div className='insulin'>
                        <p className='basal'>
                            <span className='title'>Basal:</span>
                            {' '}
                            {lib.formatBasal(props.basal)}
                            {' '}
                            {Units.BASAL}
                        </p>
                        <p className='reservoir'>
                            <span className='title'>R:</span>
                            {' '}
                            {lib.formatReservoir(props.reservoir)}
                            {' '}
                            {Units.RESERVOIR}
                        </p>
                    </div>
                    <div className='on-board'>
                        <p className='iob'>
                            <span className='title'>IOB:</span>
                            {' '}
                            {lib.formatIOB(props.iob)}
                            {' '}
                            {Units.IOB}
                        </p>
                        <p className='cob'>
                            <span className='title'>COB:</span>
                            {' '}
                            {lib.formatCOB(props.cob)}
                            {' '}
                            {Units.COB}
                        </p>
                    </div>
                    <div className='factors'>
                        <p className='isf'>
                            <span className='title'>ISF:</span>
                            {' '}
                            {lib.formatISF(props.isf)}
                            {' '}
                            {Units.ISF}
                        </p>
                        <p className='csf'>
                            <span className='title'>CSF:</span>
                            {' '}
                            {lib.formatCSF(props.csf)}
                            {' '}
                            {Units.CSF}
                        </p>
                    </div>
                    <div className='age'>
                        <p className='sage'>
                            <span className='title'>SAGE:</span>
                            {' '}
                            {lib.formatSAGE(props.sage)}
                            {' '}
                            {Units.SENSOR_AGE}
                        </p>
                        <p className='cage'>
                            <span className='title'>CAGE:</span>
                            {' '}
                            {lib.formatCAGE(props.cage)}
                            {' '}
                            {Units.CANULA_AGE}
                        </p>
                    </div>
                    <div className='battery'>
                        <p className='pump'>
                            <span className='title'>Pump Battery:</span>
                            {' '}
                            {lib.formatPumpBattery(props.battery.pump)}
                            {' '}
                            {Units.PUMP_BATTERY}
                        </p>
                        <p className='cgm'>
                            <span className='title'>CGM Battery:</span>
                            {' '}
                            {lib.formatCGMBattery(props.battery.cgm)}
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

export default Dash