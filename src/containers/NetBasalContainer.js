import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from 'actions'
import NetBasal from 'components/NetBasal'
import { getBasalAxisTicks } from 'selectors'
import { getArrayRange } from 'lib'

const mapStateToProps = (state) => {
    const { now, scale } = state.time;
    const { width, height } = state.inner.basal;
    const range = getArrayRange(getBasalAxisTicks(state));

    return {
        now,
        timeScale: scale,
        range,
        innerWidth: width,
        innerHeight: height,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: { ...bindActionCreators(Actions, dispatch) },
});

const NetBasalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NetBasal);

export default NetBasalContainer;