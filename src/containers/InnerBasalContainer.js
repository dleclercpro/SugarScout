import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import InnerBasal from '../components/InnerBasal'

const mapStateToProps = (state) => ({
    scales: state.axes.time.scales,
    scale: state.axes.time.scale,
    basals: state.pump.data.basals.data,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(FetchActions, dispatch),
        ...Redux.bindActionCreators(AxesActions, dispatch),
        ...Redux.bindActionCreators(BubbleActions, dispatch),
    },
})

const InnerBasalContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBasal)

export default InnerBasalContainer