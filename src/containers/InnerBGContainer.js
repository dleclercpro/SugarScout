import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import * as Selectors from 'selectors'
import InnerBG from 'components/InnerBG'

const mapStateToProps = (state) => ({
    bgs: Selectors.getVisibleBGs(state),
    width: state.inner.bg.width,
    height: state.inner.bg.height,
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...bindActionCreators(Actions, dispatch)},
})

const InnerBGContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBG)

export default InnerBGContainer