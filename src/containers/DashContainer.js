import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as DataTypes from 'constants/DataTypes'
import * as TimeActions from 'actions/TimeActions'
import * as FetchActions from 'actions/FetchActions'
import * as InnerActions from 'actions/InnerActions'
import * as AxesActions from 'actions/AxesActions'
import * as BubbleActions from 'actions/BubbleActions'
import Dash from 'components/Dash'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScales: state.time.scales,
    bgs: state.cgm.data[DataTypes.DATA_BG].data,
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

const DashContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dash)

export default DashContainer