import * as Time from 'constants/Time';
import { UPDATE_TIME, UPDATE_TIMESCALE, UPDATE_LAST_FETCH_TIME } from 'constants/ActionTypes';

const now = Time.NOW || new Date();

const INIT_TIME_STATE = {
    now: now,
    lastFetch: new Date(1970, 0, 1, 0, 0, 0, 0),
    scales: Time.SCALES,
    scale: Time.SCALE,
};

const TimeReducer = (state = INIT_TIME_STATE, action) => {
    switch (action.type) {
        case UPDATE_TIME:
            return {
                ...state,
                now: action.time,
            };

        case UPDATE_TIMESCALE:
            return {
                ...state,
                scale: action.scale,
            };

        case UPDATE_LAST_FETCH_TIME:
            return {
                ...state,
                lastFetch: action.time,
            };

        default:
            return state;
    }
};

export default TimeReducer;