import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import AxisTime from 'components/AxisTime'

const mapStateToProps = (state) => ({
    now: state.time.now,
    toNow: state.time.toNow,
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