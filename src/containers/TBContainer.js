import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import TB from '../components/TB'

const mapStateToProps = (state) => ({
    timeScale: state.axes.time.scale,
    basalRange: state.axes.basal.range,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(FetchActions, dispatch),
        ...Redux.bindActionCreators(AxesActions, dispatch),
        ...Redux.bindActionCreators(BubbleActions, dispatch),
    },
})

const TBContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(TB)

export default TBContainer