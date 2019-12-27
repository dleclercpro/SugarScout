import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from 'actions';
import AxisBG from 'components/AxisBG';
import { getBGAxisTicks } from 'selectors';

const mapStateToProps = (state) => ({
    ticks: getBGAxisTicks(state),
});

const mapDispatchToProps = (dispatch) => ({
    actions: { ...bindActionCreators(Actions, dispatch) },
});

const AxisBGContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AxisBG);

export default AxisBGContainer;