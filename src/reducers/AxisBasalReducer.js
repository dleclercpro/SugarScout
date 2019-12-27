import * as Units from 'constants/Units';
import { AXIS_SCALE } from 'constants/Basal';
import { UPDATE_BASAL_AXIS } from 'constants/ActionTypes';

const INIT_AXIS_BASAL_STATE = {
    units: Units.BASAL,
    scale: AXIS_SCALE,
};

const AxisBasalReducer = (state = INIT_AXIS_BASAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_BASAL_AXIS:
            return {
                ...state,
                ...action.args,
            };

        default:
            return state;
    }
};

export default AxisBasalReducer;