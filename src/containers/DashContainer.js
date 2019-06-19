import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import * as Selectors from 'selectors'
import Dash from 'components/Dash'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScales: state.time.scales,
    lastFetch: state.time.lastFetch,
    bg: Selectors.getCurrentBG(state),
    dbg: Selectors.getCurrentBGDelta(state),
    bgTrend: Selectors.getCurrentBGTrend(state),
    basal: Selectors.getCurrentBasal(state),
    isf: Selectors.getCurrentISF(state),
    csf: Selectors.getCurrentCSF(state),
    iob: Selectors.getCurrentIOB(state),
    cob: Selectors.getCurrentCOB(state),
    reservoir: Selectors.getCurrentReservoirLevel(state),
    battery: {
        pump: Selectors.getCurrentPumpBatteryLevel(state),
        cgm: Selectors.getCurrentCGMBatteryLevel(state),
    },
    sage: Selectors.getCurrentSAGE(state),
    cage: Selectors.getCurrentCAGE(state),
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const DashContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dash)

export default DashContainer