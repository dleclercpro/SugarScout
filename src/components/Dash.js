import React from 'react';
import ButtonTimeScaleContainer from 'containers/ButtonTimeScaleContainer';
import * as Units from 'constants/Units';
import DashComponent from './DashComponent';
import 'components/Dash.scss';

const Dash = (props) => {
    const {
        now, lastFetch, timeScales,
        bg, bgTrend, dbg, basal,
        isf, csf, iob, cob, sage, cage,
        reservoir, battery,
        expiration, validity, type,
    } = props;
    
    return (
        <section className='dash'>
            <div className='wrapper'>
                <div className='recent'>
                    <div className={`bg ${type.bg} ${expiration.bg}`}>
                        <p className='value'>{bg}</p>
                        <p className='trend'>
                            <span className='arrow'>{bgTrend}</span>
                            <span className='delta'>({dbg})</span>
                        </p>
                    </div>
                    <div className='general'>
                        <div className='insulin'>
                            <DashComponent name='basal' label='Basal'>
                                {basal}{' '}{Units.BASAL}
                            </DashComponent>
                            <DashComponent name='reservoir' label='R' classes={[expiration.reservoir, type.reservoir]}>
                                {reservoir}{' '}{Units.RESERVOIR}
                            </DashComponent>
                        </div>
                        <div className='on-board'>
                            <DashComponent name='iob' label='IOB' classes={[expiration.iob]}>
                                {iob}{' '}{Units.IOB}
                            </DashComponent>
                            <DashComponent name='cob' label='COB' classes={[expiration.cob]}>
                                {cob}{' '}{Units.COB}
                            </DashComponent>
                        </div>
                        <div className='factors'>
                            <DashComponent name='isf' label='ISF'>
                                {isf}{' '}{Units.ISF}
                            </DashComponent>
                            <DashComponent name='csf' label='CSF'>
                                {csf}{' '}{Units.CSF}
                            </DashComponent>
                        </div>
                        <div className='age'>
                            <DashComponent name='sage' label='SAGE' classes={[validity.sage, type.sage]}>
                                {sage.days}{' '}{Units.AGE_DAYS}
                                {' '}
                                {sage.hours}{' '}{Units.AGE_HOURS}
                            </DashComponent>
                            <DashComponent name='cage' label='CAGE' classes={[validity.cage, type.cage]}>
                                {cage.days}{' '}{Units.AGE_DAYS}
                                {' '}
                                {cage.hours}{' '}{Units.AGE_HOURS}
                            </DashComponent>
                        </div>
                        <div className='battery'>
                            <DashComponent name='pump' label='Pump Battery' classes={[expiration.battery.pump, type.battery.pump]}>
                                {battery.pump}{' '}{Units.PUMP_BATTERY}
                            </DashComponent>
                            <DashComponent name='cgm' label='CGM Battery' classes={[expiration.battery.cgm, type.battery.cgm]}>
                                {battery.cgm}{' '}{Units.CGM_BATTERY}
                            </DashComponent>
                        </div>
                    </div>
                </div>
                <div className='time'>
                    <div className='clock'>
                        {now}
                    </div>
                    <div className={`last-fetch ${expiration.lastFetch}`}>
                        {lastFetch}
                    </div>
                    <div className='buttons-timescale'>
                        {timeScales.map((scale, index) => (
                            <ButtonTimeScaleContainer key={index} value={scale} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dash;