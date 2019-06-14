import * as ActionTypes from 'constants/ActionTypes'

export const moveBubble = (position) => ({
    type: ActionTypes.MOVE_BUBBLE,
    position,
})

export const showBubble = () => ({
    type: ActionTypes.SHOW_BUBBLE,
})

export const hideBubble = () => ({
    type: ActionTypes.HIDE_BUBBLE,
})

export const updateBubble = (args) => ({
    type: ActionTypes.UPDATE_BUBBLE,
    args,
})

export const resetBubble = () => ({
    type: ActionTypes.RESET_BUBBLE,
})