import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as DataTypes from 'constants/DataTypes'
import Actions from 'actions'
import * as Selectors from 'selectors'
import InnerBasal from 'components/InnerBasal'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScale: state.time.scale,
    [DataTypes.DATA_BASAL]: state.pump.data[DataTypes.DATA_BASAL].data,
    [DataTypes.DATA_TB]: Selectors.getVisibleTBs(state),
    width: state.inner.basal.width,
    height: state.inner.basal.height,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const InnerBasalContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBasal)

export default InnerBasalContainer