import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from 'actions';
import { getVisibleBGs } from 'selectors';
import InnerBG from 'components/InnerBG';

const mapStateToProps = (state) => {
    const { width, height } = state.inner.bg;
    
    return {
        bgs: getVisibleBGs(state),
        width,
        height,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: { ...bindActionCreators(Actions, dispatch) },
});

const InnerBGContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InnerBG);

export default InnerBGContainer;