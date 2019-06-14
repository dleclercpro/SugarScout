import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import NetBasal from 'components/NetBasal'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScale: state.time.scale,
    basalRange: state.axes.basal.range,
    innerWidth: state.inner.basal.width,
    innerHeight: state.inner.basal.height,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const NetBasalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NetBasal)

export default NetBasalContainer