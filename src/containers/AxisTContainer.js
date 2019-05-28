import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import AxisT from '../components/AxisT'

const mapStateToProps = (state) => ({
    now: state.axes.t.now,
    toNow: state.axes.t.toNow,
    scale: state.axes.t.scale,
    nTicks: state.axes.t.nTicks,
    ticks: state.axes.t.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const AxisTContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisT)

export default AxisTContainer