import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import AxisBG from '../components/AxisBG'

const mapStateToProps = (state) => ({
    range: state.axes.bg.range,
    ticks: state.axes.bg.ticks,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(FetchActions, dispatch),
        ...Redux.bindActionCreators(AxesActions, dispatch),
        ...Redux.bindActionCreators(BubbleActions, dispatch),
    },
})

const AxisBGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisBG)

export default AxisBGContainer