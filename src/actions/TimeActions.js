import * as ActionTypes from 'constants/ActionTypes'

export const updateTime = () => ({
    type: ActionTypes.UPDATE_TIME,
    now: new Date(),
})

export const updateTimescale = (scale) => ({
    type: ActionTypes.UPDATE_TIMESCALE,
    scale,
})

export const updateLastFetch = () => ({
    type: ActionTypes.UPDATE_LAST_FETCH,
    time: new Date(),
})