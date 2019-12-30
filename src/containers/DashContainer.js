import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from 'actions';
import {
    getCurrentBG, getCurrentBGDelta, getCurrentBGTrendArrow, getCurrentBasal,
    getCurrentISF, getCurrentCSF, getCurrentIOB, getCurrentCOB,
    getCurrentSAGE, getCurrentCAGE,
    getCurrentReservoirLevel,
    getCurrentPumpBatteryLevel, getCurrentCGMBatteryLevel
} from 'selectors';
import Dash from 'components/Dash';
import {
    FORMAT_SHORT,
    MAX_AGE_LAST_FETCH,
    MAX_AGE_BG,
    MAX_AGE_IOB, MAX_AGE_COB,
    MAX_AGE_RESERVOIR,
    MAX_AGE_PUMP_BATTERY, MAX_AGE_CGM_BATTERY
} from 'constants/Time';
import * as fmt from 'fmt';
import { getSAGEType, getCAGEType, getReservoirType, getPumpBatteryType, getCGMBatteryType } from 'types';
import * as defaults from 'constants/Defaults';
import { getType } from 'components/BG';

const mapStateToProps = (state) => {
    let { now, lastFetch, scales } = state.time;

    let bg = getCurrentBG(state) || defaults.BG;
    let dbg = getCurrentBGDelta(state) || defaults.DBG;
    let bgTrend = getCurrentBGTrendArrow(state) || defaults.BG_TREND;
    let basal = getCurrentBasal(state) || defaults.BASAL;
    let isf = getCurrentISF(state) || defaults.ISF;
    let csf = getCurrentCSF(state) || defaults.CSF;
    let iob = getCurrentIOB(state) || defaults.IOB;
    let cob = getCurrentCOB(state) || defaults.COB;
    let sage = getCurrentSAGE(state) || defaults.SAGE;
    let cage = getCurrentCAGE(state) || defaults.CAGE;
    let reservoir = getCurrentReservoirLevel(state) || defaults.RESERVOIR;
    let battery = {
        pump: getCurrentPumpBatteryLevel(state) || defaults.PUMP_BATTERY,
        cgm: getCurrentCGMBatteryLevel(state) || defaults.CGM_BATTERY,
    };

    const getExpiration = (time, maxAge) => {
        return time < now.getTime() - maxAge ? 'is-expired' : '';
    };

    return {
        expiration: {
            lastFetch: getExpiration(lastFetch.getTime(), MAX_AGE_LAST_FETCH),
            bg: getExpiration(bg.time, MAX_AGE_BG),
            iob: getExpiration(iob.time, MAX_AGE_IOB),
            cob: getExpiration(cob.time, MAX_AGE_COB),
            reservoir: getExpiration(reservoir.time, MAX_AGE_RESERVOIR),
            battery: {
                pump: getExpiration(battery.pump.time, MAX_AGE_PUMP_BATTERY),
                cgm: getExpiration(battery.cgm.time, MAX_AGE_CGM_BATTERY),
            },
        },

        validity: {
            sage: sage === defaults.SAGE ? 'is-invalid' : '',
            cage: cage === defaults.CAGE ? 'is-invalid' : '',
        },

        type: {
            bg: getType(bg.value),
            reservoir: getReservoirType(reservoir.value),
            sage: getSAGEType(sage.value),
            cage: getCAGEType(cage.value),
            battery: {
                pump: getPumpBatteryType(battery.pump.value),
                cgm: getCGMBatteryType(battery.cgm.value),
            },
        },
        
        // Formatted values for dash
        now: fmt.time(now.getTime(), FORMAT_SHORT),
        lastFetch: fmt.time(lastFetch.getTime(), FORMAT_SHORT),
        timeScales: scales,
        bg: fmt.bg(bg.value),
        dbg: fmt.dbg(dbg.value),
        bgTrend: bgTrend.value,
        basal: fmt.basal(basal.value),
        isf: fmt.isf(isf.value),
        csf: fmt.csf(csf.value),
        iob: fmt.iob(iob.value),
        cob: fmt.cob(cob.value),
        reservoir: fmt.reservoir(reservoir.value),
        battery: {
            pump: fmt.pumpBattery(battery.pump.value),
            cgm: fmt.cgmBattery(battery.cgm.value),
        },
        sage: {
            days: fmt.ageDays(sage.value),
            hours: fmt.ageHours(sage.value)
        },
        cage: {
            days: fmt.ageDays(cage.value),
            hours: fmt.ageHours(cage.value)
        },
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: { ...bindActionCreators(Actions, dispatch) },
});

const DashContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dash);

export default DashContainer;