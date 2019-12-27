import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from 'actions';
import App from 'components/App';

const mapDispatchToProps = (dispatch) => ({
    actions: { ...bindActionCreators(Actions, dispatch) },
});

const AppContainer = connect(
    () => {},
    mapDispatchToProps,
)(App);

export default AppContainer;