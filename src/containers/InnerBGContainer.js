import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import InnerBG from '../components/InnerBG'

const mapStateToProps = (state) => ({
    scales: state.axes.time.scales,
    scale: state.axes.time.scale,
    bgs: state.cgm.data.bgs.data,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const InnerBGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBG)

export default InnerBGContainer