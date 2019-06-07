import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import Actions from 'actions'
import Graph from 'components/Graph'

const mapStateToProps = (state) => ({
    timeScale: state.time.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const GraphContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Graph)

export default GraphContainer