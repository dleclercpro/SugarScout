import * as bg from '../constants/BG'
import * as actions from '../constants/ActionTypes'

const INIT_STATE = {
    units: bg.UNIT,
    scale: bg.AXIS_SCALE,
    range: [
        bg.AXIS_MIN_MMOL_L,
        bg.AXIS_MAX_MMOL_L
    ],
    ticks: [],
}

const AxisBG = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.UPDATE_BG_AXIS_TICKS:
            return {
                ...state,
                ticks: action.ticks,
            }

        default:
            return state
    }
}

export default AxisBG