import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import * as Selectors from 'selectors'
import Dash from 'components/Dash'
import * as dash from 'constants/Dash'

const mapStateToProps = (state) => ({
    isExpired: (time, maxAge) => time < state.time.now.getTime() - maxAge ? 'is-expired' : '',
    
    now: state.time.now,
    timeScales: state.time.scales,
    lastFetch: state.time.lastFetch,
    bg: Selectors.getCurrentBG(state) || dash.DEFAULT_BG,
    dbg: Selectors.getCurrentBGDelta(state) || dash.DEFAULT_DBG,
    bgTrend: Selectors.getCurrentBGTrend(state) || dash.DEFAULT_BG_TREND,
    basal: Selectors.getCurrentBasal(state) || dash.DEFAULT_BASAL,
    isf: Selectors.getCurrentISF(state) || dash.DEFAULT_ISF,
    csf: Selectors.getCurrentCSF(state) || dash.DEFAULT_CSF,
    iob: Selectors.getCurrentIOB(state) || dash.DEFAULT_IOB,
    cob: Selectors.getCurrentCOB(state) || dash.DEFAULT_COB,
    reservoir: Selectors.getCurrentReservoirLevel(state) || dash.DEFAULT_RESERVOIR,
    battery: {
        pump: Selectors.getCurrentPumpBatteryLevel(state) || dash.DEFAULT_PUMP_BATTERY,
        cgm: Selectors.getCurrentCGMBatteryLevel(state) || dash.DEFAULT_CGM_BATTERY,
    },
    sage: Selectors.getCurrentSAGE(state) || dash.DEFAULT_SENSOR_AGE,
    cage: Selectors.getCurrentCAGE(state) || dash.DEFAULT_CANULA_AGE,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const DashContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dash)

export default DashContainer