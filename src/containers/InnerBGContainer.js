import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as DataTypes from '../constants/DataTypes'
import * as TimeActions from '../actions/TimeActions'
import * as FetchActions from '../actions/FetchActions'
import * as InnerActions from '../actions/InnerActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import InnerBG from '../components/InnerBG'

const mapStateToProps = (state) => ({
    timeScales: state.time.scales,
    [DataTypes.DATA_BG]: state.cgm.data[DataTypes.DATA_BG].data,
    width: state.inner.bg.width,
    height: state.inner.bg.height,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...Redux.bindActionCreators({
            ...TimeActions,
            ...FetchActions,
            ...InnerActions,
            ...AxesActions,
            ...BubbleActions,
        }, dispatch),
    },
})

const InnerBGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBG)

export default InnerBGContainer