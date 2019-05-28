import * as axis from '../constants/AxisBG'
import * as actions from '../constants/Actions'

const INIT_STATE = {
    units: 'mmol/L',
    range: [axis.MIN_MMOL_L, axis.MAX_MMOL_L],
    scale: 'linear',
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