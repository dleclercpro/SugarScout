import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import AxisTime from '../components/AxisTime'

const mapStateToProps = (state) => ({
    now: state.axes.time.now,
    toNow: state.axes.time.toNow,
    scale: state.axes.time.scale,
    nTicks: state.axes.time.nTicks,
    ticks: state.axes.time.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const AxisTimeContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisTime)

export default AxisTimeContainer