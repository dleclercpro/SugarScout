import * as ActionTypes from '../constants/ActionTypes'

export const updateTimeAxis = (args) => ({
    type: ActionTypes.UPDATE_TIME_AXIS,
    args,
})

export const updateBGAxis = (args) => ({
    type: ActionTypes.UPDATE_BG_AXIS,
    args,
})

export const updateBasalAxis = (args) => ({
    type: ActionTypes.UPDATE_BASAL_AXIS,
    args,
})