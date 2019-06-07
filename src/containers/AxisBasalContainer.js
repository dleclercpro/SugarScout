import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import Actions from 'actions'
import AxisBasal from 'components/AxisBasal'

const mapStateToProps = (state) => ({
    range: state.axes.basal.range,
    ticks: state.axes.basal.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const AxisBasalContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisBasal)

export default AxisBasalContainer