import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import Graph from 'components/Graph'

const mapStateToProps = (state) => ({
    timeScale: state.time.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const GraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Graph)

export default GraphContainer