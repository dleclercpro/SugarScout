import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as TimeActions from '../actions/TimeActions'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import ButtonTimeScale from '../components/ButtonTimeScale'

const mapStateToProps = (state) => ({
    timeScale: state.time.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(TimeActions, dispatch),
        ...Redux.bindActionCreators(FetchActions, dispatch),
        ...Redux.bindActionCreators(AxesActions, dispatch),
        ...Redux.bindActionCreators(BubbleActions, dispatch),
    },
})

const ButtonTimeScaleContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(ButtonTimeScale)

export default ButtonTimeScaleContainer