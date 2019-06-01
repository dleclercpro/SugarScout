import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as TimeActions from '../actions/TimeActions'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import Bubble from '../components/Bubble'

const mapStateToProps = (state) => ({
    status: state.bubble.status,
    type: state.bubble.type,
    position: state.bubble.position,
    time: state.bubble.time,
    info: state.bubble.info,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(TimeActions, dispatch),
        ...Redux.bindActionCreators(FetchActions, dispatch),
        ...Redux.bindActionCreators(AxesActions, dispatch),
        ...Redux.bindActionCreators(BubbleActions, dispatch),
    },
})

const BubbleContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Bubble)

export default BubbleContainer