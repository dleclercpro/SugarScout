import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import Graph from '../components/Graph'

const mapStateToProps = (state) => ({
    scale: state.axes.time.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(FetchActions, dispatch),
        ...Redux.bindActionCreators(AxesActions, dispatch),
        ...Redux.bindActionCreators(BubbleActions, dispatch),
    },
})

const GraphContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Graph)

export default GraphContainer