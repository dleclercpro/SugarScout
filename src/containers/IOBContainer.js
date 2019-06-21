import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import IOB from 'components/IOB'

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

const IOBContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(IOB)

export default IOBContainer