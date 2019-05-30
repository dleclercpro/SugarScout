import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import InnerBG from '../components/InnerBG'

const mapStateToProps = (state) => ({
    scales: state.axes.time.scales,
    scale: state.axes.time.scale,
    bgs: state.cgm.data.bgs.data,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(FetchActions, dispatch),
        ...Redux.bindActionCreators(AxesActions, dispatch),
        ...Redux.bindActionCreators(BubbleActions, dispatch),
    },
})

const InnerBGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBG)

export default InnerBGContainer