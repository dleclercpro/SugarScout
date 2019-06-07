import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import Actions from 'actions'
import BG from 'components/BG'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScale: state.time.scale,
    bgRange: state.axes.bg.range,
    innerWidth: state.inner.bg.width,
    innerHeight: state.inner.bg.height,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const BGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(BG)

export default BGContainer