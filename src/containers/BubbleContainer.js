import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from 'actions';
import Bubble from 'components/Bubble';

const mapStateToProps = (state) => {
    const { position, target, status, time, info, duration } = state.bubble;
    
    return {
        status,
        target,
        position,
        time,
        info,
        duration,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: { ...bindActionCreators(Actions, dispatch) },
});

const BubbleContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Bubble);

export default BubbleContainer;