import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import * as Selectors from 'selectors'
import Dash from 'components/Dash'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScales: state.time.scales,
    lastFetch: state.time.lastFetch,
    bg: Selectors.getCurrentBG(state).value,
    dbg: Selectors.getCurrentBGDelta(state),
    bgTrend: Selectors.getCurrentBGTrend(state),
    basal: Selectors.getCurrentBasal(state).value,
    isf: Selectors.getCurrentISF(state).value,
    csf: Selectors.getCurrentCSF(state).value,
    iob: Selectors.getCurrentIOB(state).value,
    cob: Selectors.getCurrentCOB(state).value,
    reservoir: Selectors.getCurrentReservoirLevel(state).value,
    battery: {
        pump: Selectors.getCurrentPumpBatteryLevel(state).value,
        cgm: Selectors.getCurrentCGMBatteryLevel(state).value,
    },
    sage: 0,
    cage: 0,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const DashContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dash)

export default DashContainer