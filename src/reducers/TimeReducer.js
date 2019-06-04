import * as Time from '../constants/Time'
import * as ActionTypes from '../constants/ActionTypes'

export const INIT_TIME_STATE = {
    now: Time.NOW || new Date(),
    toNow: 0,
    scales: Time.SCALES,
    scale: Time.SCALE,
}

const TimeReducer = (state = INIT_TIME_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TIME:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default TimeReducer