import * as Basal from 'constants/Basal'
import * as ActionTypes from 'constants/ActionTypes'

export const INIT_AXIS_BASAL_STATE = {
    units: Basal.UNITS,
    scale: Basal.AXIS_SCALE,
    range: [
        Basal.AXIS_MIN_U_H,
        Basal.AXIS_MAX_U_H
    ],
}

const AxisBasalReducer = (state = INIT_AXIS_BASAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_BASAL_AXIS:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default AxisBasalReducer