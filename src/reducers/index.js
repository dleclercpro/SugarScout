import { combineReducers } from 'redux';
import TimeReducer from 'reducers/TimeReducer';
import BubbleReducer from 'reducers/BubbleReducer';
import InnerReducer from 'reducers/InnerReducer';
import AxisTimeReducer from 'reducers/AxisTimeReducer';
import AxisBGReducer from 'reducers/AxisBGReducer';
import AxisBasalReducer from 'reducers/AxisBasalReducer';
import DataReducer from 'reducers/DataReducer';

const rootReducer = combineReducers({
    time: TimeReducer,
    data: DataReducer,
    bubble: BubbleReducer,
    inner: InnerReducer,
    axes: combineReducers({
        time: AxisTimeReducer,
        bg: AxisBGReducer,
        basal: AxisBasalReducer,
    }),
});

export default rootReducer;