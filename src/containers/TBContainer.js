import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as TimeActions from '../actions/TimeActions'
import * as FetchActions from '../actions/FetchActions'
import * as InnerActions from '../actions/InnerActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import TB from '../components/TB'

const mapStateToProps = (state) => ({
    timeScale: state.time.scale,
    basalRange: state.axes.basal.range,
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

const TBContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(TB)

export default TBContainer