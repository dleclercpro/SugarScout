import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DataTypes from 'constants/DataTypes'
import Actions from 'actions'
import Dash from 'components/Dash'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScales: state.time.scales,
    lastFetch: state.time.lastFetch,
    bgs: state.cgm.data[DataTypes.DATA_BG].data,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const DashContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dash)

export default DashContainer