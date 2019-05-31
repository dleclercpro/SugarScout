import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as DataTypes from '../constants/DataTypes'
import * as FetchActions from '../actions/FetchActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import InnerBG from '../components/InnerBG'

const mapStateToProps = (state) => ({
    scales: state.axes.time.scales,
    scale: state.axes.time.scale,
    [DataTypes.DATA_BG]: state.cgm.data[DataTypes.DATA_BG].data,
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