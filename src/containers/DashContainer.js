import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as DataTypes from '../constants/DataTypes'
import * as TimeActions from '../actions/TimeActions'
import * as FetchActions from '../actions/FetchActions'
import * as InnerActions from '../actions/InnerActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import Dash from '../components/Dash'
import * as Time from '../constants/Time'
import * as lib from '../lib'

const getLastBG = (state) => {
    const bgs = state.cgm.data[DataTypes.DATA_BG].data
    const nBGs = bgs.length

    return nBGs ? bgs[nBGs - 1] : {
        time: -1,
        value: -1,
    }
}

const getLastDelta = (state) => {
    const bgs = state.cgm.data[DataTypes.DATA_BG].data
    const nBGs = bgs.length

    return nBGs > 1 ? bgs[nBGs - 1].value - bgs[nBGs - 2].value : 0
}

const mapStateToProps = (state) => ({
    now: lib.convertEpochToFormatTime(state.time.now.getTime(), Time.FORMAT_SHORT),
    timeScales: state.time.scales,
    lastBG: getLastBG(state),
    lastDelta: getLastDelta(state),
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