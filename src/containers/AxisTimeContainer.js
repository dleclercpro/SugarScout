import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import AxisTime from 'components/AxisTime'

const getTimeToNow = (now) => (
    now.getMinutes() * 60 * 1000 +
    now.getSeconds() * 1000 +
    now.getMilliseconds()
)

const mapStateToProps = (state) => ({
    now: state.time.now,
    toNow: getTimeToNow(state.time.now),
    timeScale: state.time.scale,
    nTicks: state.axes.time.nTicks,
    ticks: state.axes.time.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const AxisTimeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisTime)

export default AxisTimeContainer