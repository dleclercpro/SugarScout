import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import AxisT from '../components/AxisT'

const mapStateToProps = (state) => ({
    now: state.axisT.now,
    toNow: state.axisT.toNow,
    units: state.axisT.units,
    scale: state.axisT.scale,
    ticks: state.axisT.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const AxisTContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisT)

export default AxisTContainer