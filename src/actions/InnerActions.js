import * as ActionTypes from 'constants/ActionTypes'

export const updateInnerBGSize = (width, height) => ({
    type: ActionTypes.UPDATE_INNER_BG_SIZE,
    width,
    height,
})

export const updateInnerBasalSize = (width, height) => ({
    type: ActionTypes.UPDATE_INNER_BASAL_SIZE,
    width,
    height,
})