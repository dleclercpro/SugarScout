import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
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
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const AxisTimeContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisTime)

export default AxisTimeContainer