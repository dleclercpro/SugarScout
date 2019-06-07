import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import AxisBasal from 'components/AxisBasal'

const mapStateToProps = (state) => ({
    range: state.axes.basal.range,
    ticks: state.axes.basal.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const AxisBasalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisBasal)

export default AxisBasalContainer