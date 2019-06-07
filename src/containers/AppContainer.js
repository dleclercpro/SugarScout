import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import Actions from 'actions'
import App from 'components/App'

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    actions: {...Redux.bindActionCreators(Actions, dispatch)},
})

const AppContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)

export default AppContainer