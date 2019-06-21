import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import * as Selectors from 'selectors'
import InnerBasal from 'components/InnerBasal'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScale: state.time.scale,
    basals: state.data.pump.data.basals,
    netBasals: Selectors.getVisibleNetBasals(state),
    boluses: Selectors.getVisibleBoluses(state),
    iobs: Selectors.getVisibleIOBs(state),
    width: state.inner.basal.width,
    height: state.inner.basal.height,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const InnerBasalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBasal)

export default InnerBasalContainer