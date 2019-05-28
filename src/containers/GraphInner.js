import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import GraphInner from '../components/GraphInner'

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
})

const GraphInnerContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(GraphInner)

export default GraphInnerContainer