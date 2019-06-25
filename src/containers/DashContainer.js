import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import * as Selectors from 'selectors'
import Dash from 'components/Dash'
import * as defaults from 'constants/Defaults'

const mapStateToProps = (state) => ({
    isExpired: (time, maxAge) => time < state.time.now.getTime() - maxAge ? 'is-expired' : '',
    
    now: state.time.now,
    timeScales: state.time.scales,
    lastFetch: state.time.lastFetch,
    bg: Selectors.getCurrentBG(state) || defaults.BG,
    dbg: Selectors.getCurrentBGDelta(state) || defaults.DBG,
    bgTrend: Selectors.getCurrentBGTrendArrow(state) || defaults.BG_TREND,
    basal: Selectors.getCurrentBasal(state) || defaults.BASAL,
    isf: Selectors.getCurrentISF(state) || defaults.ISF,
    csf: Selectors.getCurrentCSF(state) || defaults.CSF,
    iob: Selectors.getCurrentIOB(state) || defaults.IOB,
    cob: Selectors.getCurrentCOB(state) || defaults.COB,
    sage: Selectors.getCurrentSensorAge(state) || defaults.SENSOR_AGE,
    cage: Selectors.getCurrentCanulaAge(state) || defaults.CANULA_AGE,
    reservoir: Selectors.getCurrentReservoirLevel(state) || defaults.RESERVOIR,
    battery: {
        pump: Selectors.getCurrentPumpBatteryLevel(state) || defaults.PUMP_BATTERY,
        cgm: Selectors.getCurrentCGMBatteryLevel(state) || defaults.CGM_BATTERY,
    },
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const DashContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dash)

export default DashContainer