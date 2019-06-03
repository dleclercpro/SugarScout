import * as ActionTypes from '../constants/ActionTypes'

export const updateInnerBGSize = (width, height) => ({
    type: ActionTypes.UPDATE_INNER_BG_SIZE,
    width,
    height,
})