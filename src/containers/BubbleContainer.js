import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import Actions from 'actions'
import Bubble from 'components/Bubble'

const mapStateToProps = (state) => ({
    status: state.bubble.status,
    type: state.bubble.type,
    position: state.bubble.position,
    time: state.bubble.time,
    info: state.bubble.info,
    duration: state.bubble.duration,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const BubbleContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Bubble)

export default BubbleContainer