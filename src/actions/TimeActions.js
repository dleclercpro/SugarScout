import { UPDATE_TIME, UPDATE_TIMESCALE, UPDATE_LAST_FETCH_TIME } from 'constants/ActionTypes';

export const updateTime = () => ({
    type: UPDATE_TIME,
    time: new Date(),
});

export const updateTimescale = (scale) => ({
    type: UPDATE_TIMESCALE,
    scale,
});

export const updateLastDataFetch = () => ({
    type: UPDATE_LAST_FETCH_TIME,
    time: new Date(),
});