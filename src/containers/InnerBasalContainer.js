import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import InnerBasal from '../components/InnerBasal'

const mapStateToProps = (state) => ({
    scales: state.axes.time.scales,
    scale: state.axes.time.scale,
    basals: state.pump.data.basals.data,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const InnerBasalContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBasal)

export default InnerBasalContainer