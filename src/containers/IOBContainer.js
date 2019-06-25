import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import IOB from 'components/IOB'
import * as Selectors from 'selectors'
import * as lib from 'lib'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScale: state.time.scale,
    range: lib.getArrayRange(Selectors.getBasalAxisTicks(state)),
    innerWidth: state.inner.basal.width,
    innerHeight: state.inner.basal.height,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const IOBContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(IOB)

export default IOBContainer