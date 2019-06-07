import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import ButtonTimeScale from 'components/ButtonTimeScale'

const mapStateToProps = (state) => ({
    timeScale: state.time.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const ButtonTimeScaleContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonTimeScale)

export default ButtonTimeScaleContainer