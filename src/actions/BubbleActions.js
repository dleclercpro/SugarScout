import * as ActionTypes from 'constants/ActionTypes'

export const resetBubble = () => ({
    type: ActionTypes.RESET_BUBBLE,
})

export const moveBubble = (position) => ({
    type: ActionTypes.MOVE_BUBBLE,
    position,
})

export const updateBubble = (args) => ({
    type: ActionTypes.UPDATE_BUBBLE,
    args,
})