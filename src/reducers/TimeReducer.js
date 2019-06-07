import * as Time from 'constants/Time'
import * as ActionTypes from 'constants/ActionTypes'

const getTimeToNow = (now) => {
    return (
        now.getMinutes() * 60 * 1000 +
        now.getSeconds() * 1000 +
        now.getMilliseconds()
    )
}

const now = Time.NOW || new Date()

const INIT_TIME_STATE = {
    now: now,
    toNow: getTimeToNow(now),
    scales: Time.SCALES,
    scale: Time.SCALE,
    lastFetch: now,
}

const TimeReducer = (state = INIT_TIME_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TIME:
            return {
                ...state,
                now: action.now,
                toNow: getTimeToNow(state.now),
            }

        case ActionTypes.UPDATE_TIMESCALE:
            return {
                ...state,
                scale: action.scale,
            }

        case ActionTypes.UPDATE_LAST_FETCH:
            return {
                ...state,
                lastFetch: action.time,
            }

        default:
            return state
    }
}

export default TimeReducer