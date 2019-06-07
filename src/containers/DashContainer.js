import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as DataTypes from 'constants/DataTypes'
import Actions from 'actions'
import Dash from 'components/Dash'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScales: state.time.scales,
    bgs: state.cgm.data[DataTypes.DATA_BG].data,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const DashContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dash)

export default DashContainer