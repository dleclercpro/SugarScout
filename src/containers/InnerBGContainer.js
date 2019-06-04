import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as DataTypes from '../constants/DataTypes'
import * as TimeActions from '../actions/TimeActions'
import * as FetchActions from '../actions/FetchActions'
import * as InnerActions from '../actions/InnerActions'
import * as AxesActions from '../actions/AxesActions'
import * as BubbleActions from '../actions/BubbleActions'
import * as Selectors from '../selectors'
import InnerBG from '../components/InnerBG'

const mapStateToProps = (state) => ({
    [DataTypes.DATA_BG]: Selectors.getVisibleBGs(state),
    width: state.inner.bg.width,
    height: state.inner.bg.height,
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

const InnerBGContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBG)

export default InnerBGContainer