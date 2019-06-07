import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as TimeActions from 'actions/TimeActions'
import * as FetchActions from 'actions/FetchActions'
import * as InnerActions from 'actions/InnerActions'
import * as AxesActions from 'actions/AxesActions'
import * as BubbleActions from 'actions/BubbleActions'
import App from 'components/App'

const mapStateToProps = (state) => ({
    
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

const AppContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)

export default AppContainer