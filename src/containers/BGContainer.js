import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import BG from '../components/BG'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
    now: state.axes.t.now,
    tScale: state.axes.t.scale,
    bgRange: state.axes.bg.range,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const BGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(BG)

export default BGContainer