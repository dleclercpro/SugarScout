import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
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
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const TBContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(TB)

export default TBContainer