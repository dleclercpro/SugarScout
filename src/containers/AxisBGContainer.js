import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import AxisBG from 'components/AxisBG'

const mapStateToProps = (state) => ({
    range: state.axes.bg.range,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const AxisBGContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisBG)

export default AxisBGContainer