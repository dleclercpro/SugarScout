import * as time from '../constants/Time'
import * as actions from '../constants/ActionTypes'

const INIT_STATE = {
    units: time.UNIT,
    now: time.NOW || new Date(),
    toNow: 0, // (ms)
    scales: time.AXIS_SCALES,
    scale: time.AXIS_SCALE,
    nTicks: time.AXIS_N_TICKS,
    ticks: [],
}

const AxisTimeReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.UPDATE_TIME_AXIS:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default AxisTimeReducer