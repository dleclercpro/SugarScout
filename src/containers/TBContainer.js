import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import TB from 'components/TB'

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

const TBContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TB)

export default TBContainer