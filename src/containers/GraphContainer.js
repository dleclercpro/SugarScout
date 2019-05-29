import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import Graph from '../components/Graph'

const mapStateToProps = (state) => ({
    scale: state.axes.time.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const GraphContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Graph)

export default GraphContainer