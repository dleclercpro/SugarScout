import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import AxisBasal from 'components/AxisBasal'
import * as Selectors from 'selectors'

const mapStateToProps = (state) => ({
    ticks: Selectors.getBasalAxisTicks(state),
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const AxisBasalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisBasal)

export default AxisBasalContainer