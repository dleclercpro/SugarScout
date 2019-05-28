import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import Inner from '../components/Inner'

const mapStateToProps = (state) => ({
    scales: state.axes.t.scales,
    scale: state.axes.t.scale,
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const InnerContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Inner)

export default InnerContainer