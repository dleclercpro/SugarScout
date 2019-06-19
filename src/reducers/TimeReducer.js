import * as Time from 'constants/Time'
import * as ActionTypes from 'constants/ActionTypes'

const now = Time.NOW || new Date()

const INIT_TIME_STATE = {
    now: now,
    lastFetch: now,
    scales: Time.SCALES,
    scale: Time.SCALE,
}

const TimeReducer = (state = INIT_TIME_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TIME:
            return {
                ...state,
                now: action.time,
            }

        case ActionTypes.UPDATE_TIMESCALE:
            return {
                ...state,
                scale: action.scale,
            }

        case ActionTypes.UPDATE_LAST_DATA_FETCH:
            return {
                ...state,
                lastFetch: action.time,
            }

        default:
            return state
    }
}

export default TimeReducer