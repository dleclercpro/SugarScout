import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import Bubble from '../components/Bubble'
import * as actions from '../actions'

const mapStateToProps = (state) => ({
    status: state.bubble.status,
    type: state.bubble.type,
    position: state.bubble.position,
    time: state.bubble.time,
    info: state.bubble.info,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const BubbleContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Bubble)

export default BubbleContainer