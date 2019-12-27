import * as Units from 'constants/Units';
import { AXIS_SCALE } from 'constants/BG';
import { UPDATE_BG_AXIS } from 'constants/ActionTypes';

const INIT_AXIS_BG_STATE = {
    units: Units.BG,
    scale: AXIS_SCALE,
};

const AxisBGReducer = (state = INIT_AXIS_BG_STATE, action) => {
    switch (action.type) {
        case UPDATE_BG_AXIS:
            return {
                ...state,
                ...action.args,
            };

        default:
            return state;
    }
};

export default AxisBGReducer;