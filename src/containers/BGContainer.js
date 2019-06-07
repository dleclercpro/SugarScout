import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as TimeActions from 'actions/TimeActions'
import * as FetchActions from 'actions/FetchActions'
import * as InnerActions from 'actions/InnerActions'
import * as AxesActions from 'actions/AxesActions'
import * as BubbleActions from 'actions/BubbleActions'
import BG from 'components/BG'

const mapStateToProps = (state) => ({
    now: state.time.now,
    timeScale: state.time.scale,
    bgRange: state.axes.bg.range,
    innerWidth: state.inner.bg.width,
    innerHeight: state.inner.bg.height,
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

const BGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(BG)

export default BGContainer