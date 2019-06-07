import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as TimeActions from 'actions/TimeActions'
import * as FetchActions from 'actions/FetchActions'
import * as InnerActions from 'actions/InnerActions'
import * as AxesActions from 'actions/AxesActions'
import * as BubbleActions from 'actions/BubbleActions'
import AxisBasal from 'components/AxisBasal'

const mapStateToProps = (state) => ({
    range: state.axes.basal.range,
    ticks: state.axes.basal.ticks,
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

const AxisBasalContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisBasal)

export default AxisBasalContainer