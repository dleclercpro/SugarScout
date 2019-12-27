import * as Units from 'constants/Units';
import { AXIS_N_TICKS } from 'constants/Time';
import { UPDATE_TIME_AXIS } from 'constants/ActionTypes';

const INIT_AXIS_TIME_STATE = {
    units: Units.TIME,
    nTicks: AXIS_N_TICKS,
};

const AxisTimeReducer = (state = INIT_AXIS_TIME_STATE, action) => {
    switch (action.type) {
        case UPDATE_TIME_AXIS:
            return {
                ...state,
                ...action.args,
            };

        default:
            return state;
    }
};

export default AxisTimeReducer;