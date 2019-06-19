import * as ActionTypes from 'constants/ActionTypes'

export const updateTime = () => ({
    type: ActionTypes.UPDATE_TIME,
    time: new Date(),
})

export const updateTimescale = (scale) => ({
    type: ActionTypes.UPDATE_TIMESCALE,
    scale,
})

export const updateLastDataFetch = () => ({
    type: ActionTypes.UPDATE_LAST_DATA_FETCH,
    time: new Date(),
})