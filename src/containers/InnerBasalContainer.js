import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as DataTypes from '../constants/DataTypes'
import * as TimeActions from '../actions/TimeActions'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import InnerBasal from '../components/InnerBasal'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScale: state.time.scale,
    lastTBTime: state.time.lastTB,
    [DataTypes.DATA_BASAL]: state.pump.data[DataTypes.DATA_BASAL].data,
    [DataTypes.DATA_TB]: state.pump.data[DataTypes.DATA_TB].data,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators(TimeActions, dispatch),
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