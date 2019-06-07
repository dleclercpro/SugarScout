import * as Time from 'constants/Time'
import * as ActionTypes from 'constants/ActionTypes'

export const INIT_TIME_STATE = {
    now: Time.NOW || new Date(),
    toNow: 0,
    scales: Time.SCALES,
    scale: Time.SCALE,
}

const getTimeToNow = (now) => {
    return (
        now.getMinutes() * 60 * 1000 +
        now.getSeconds() * 1000 +
        now.getMilliseconds()
    )
}

const TimeReducer = (state = INIT_TIME_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TIME:
            return {
                ...state,
                now: action.now,
            }

        case ActionTypes.UPDATE_TIME_TO_NOW:
            return {
                ...state,
                toNow: getTimeToNow(state.now),
            }

        case ActionTypes.UPDATE_TIMESCALE:
            return {
                ...state,
                scale: action.scale,
            }

        default:
            return state
    }
}

export default TimeReducer