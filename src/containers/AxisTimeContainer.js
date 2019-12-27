import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from 'actions';
import { M_TO_MS, S_TO_MS } from 'constants/Time';
import AxisTime from 'components/AxisTime';

const getTimeSinceLastHour = (now) => (
    now.getMinutes() * M_TO_MS +
    now.getSeconds() * S_TO_MS +
    now.getMilliseconds()
);

const mapStateToProps = (state) => {
    const { now, scale } = state.time;
    const { nTicks, ticks } = state.axes.time;
    const toNow = getTimeSinceLastHour(now);

    return {
        now,
        toNow,
        timeScale: scale,
        nTicks,
        ticks,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: { ...bindActionCreators(Actions, dispatch) },
});

const AxisTimeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisTime);

export default AxisTimeContainer;