import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import AxisBG from '../components/AxisBG'

const mapStateToProps = (state) => ({
    range: state.axes.bg.range,
    ticks: state.axes.bg.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const AxisBGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisBG)

export default AxisBGContainer