import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as TimeActions from '../actions/TimeActions'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import AxisTime from '../components/AxisTime'

const mapStateToProps = (state) => ({
    now: state.time.now,
    toNow: state.time.toNow,
    timeScale: state.time.scale,
    nTicks: state.axes.time.nTicks,
    ticks: state.axes.time.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(TimeActions, dispatch),
        ...Redux.bindActionCreators(FetchActions, dispatch),
        ...Redux.bindActionCreators(AxesActions, dispatch),
        ...Redux.bindActionCreators(BubbleActions, dispatch),
    },
})

const AxisTimeContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisTime)

export default AxisTimeContainer