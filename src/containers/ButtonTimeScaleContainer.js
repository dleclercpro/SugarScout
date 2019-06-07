import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import Actions from 'actions'
import ButtonTimeScale from 'components/ButtonTimeScale'

const mapStateToProps = (state) => ({
    timeScale: state.time.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const ButtonTimeScaleContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonTimeScale)

export default ButtonTimeScaleContainer