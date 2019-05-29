import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import ButtonTimeScale from '../components/ButtonTimeScale'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
    timeScale: state.axes.time.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const ButtonTimeScaleContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonTimeScale)

export default ButtonTimeScaleContainer