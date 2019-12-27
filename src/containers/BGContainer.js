import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from 'actions';
import BG from 'components/BG';
import { getBGAxisTicks } from 'selectors';
import { getArrayRange } from 'lib';

const mapStateToProps = (state) => {
    const { now, scale } = state.time;
    const { width, height } = state.inner.bg;
    const range = getArrayRange(getBGAxisTicks(state));

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

const BGContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BG);

export default BGContainer;