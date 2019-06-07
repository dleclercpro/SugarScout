import * as ActionTypes from 'constants/ActionTypes'

export const updateTime = (now) => ({
    type: ActionTypes.UPDATE_TIME,
    now,
})

export const updateTimeToNow = () => ({
    type: ActionTypes.UPDATE_TIME_TO_NOW,
})

export const updateTimescale = (scale) => ({
    type: ActionTypes.UPDATE_TIMESCALE,
    scale,
})