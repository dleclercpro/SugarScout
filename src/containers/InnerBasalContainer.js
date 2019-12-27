import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from 'actions';
import { getVisibleNetBasals, getVisibleBoluses, getVisibleIOBs } from 'selectors';
import InnerBasal from 'components/InnerBasal';

const mapStateToProps = (state) => {
    const { now, scale } = state.time;
    const { width, height } = state.inner.basal;
    const { basals } = state.data.pump.data;

    return {
        now,
        timeScale: scale,
        basals,
        netBasals: getVisibleNetBasals(state),
        boluses: getVisibleBoluses(state),
        iobs: getVisibleIOBs(state),
        width,
        height,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: { ...bindActionCreators(Actions, dispatch) },
});

const InnerBasalContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBasal);

export default InnerBasalContainer;