import * as BG from 'constants/BG'
import * as ActionTypes from 'constants/ActionTypes'

const INIT_AXIS_BG_STATE = {
    units: BG.UNITS,
    scale: BG.AXIS_SCALE,
    range: [
        BG.AXIS_MIN_MMOL_L,
        BG.AXIS_MAX_MMOL_L
    ],
}

const AxisBGReducer = (state = INIT_AXIS_BG_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_BG_AXIS:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default AxisBGReducer