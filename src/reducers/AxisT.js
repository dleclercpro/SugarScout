import * as axis from '../constants/AxisT'
import * as actions from '../constants/ActionTypes'

const INIT_STATE = {
    units: 'h',
    now: new Date(),
    toNow: 0,
    scale: axis.SCALE_H,
    nTicks: axis.N_TICKS,
    ticks: [],
}

const AxisT = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.UPDATE_TIME_AXIS_SCALE:
            return {
                ...state,
                units: action.units,
                scale: action.scale,
            }

        case actions.UPDATE_TIME_AXIS_TO_NOW:
            return {
                ...state,
                toNow: action.toNow,
            }

        case actions.UPDATE_TIME_AXIS_TICKS:
            return {
                ...state,
                ticks: action.ticks,
            }

        default:
            return state
    }
}

export default AxisT