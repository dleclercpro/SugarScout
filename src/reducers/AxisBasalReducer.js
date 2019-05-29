import * as basal from '../constants/Basal'
import * as actions from '../constants/ActionTypes'

const INIT_STATE = {
    units: basal.UNIT,
    scale: basal.AXIS_SCALE,
    range: [
        basal.AXIS_MIN_U_H,
        basal.AXIS_MAX_U_H
    ],
    ticks: [],
}

const AxisBasalReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.UPDATE_BASAL_AXIS:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default AxisBasalReducer