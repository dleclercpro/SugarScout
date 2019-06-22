import * as ActionTypes from 'constants/ActionTypes'

export const resetBubble = () => ({
    type: ActionTypes.RESET_BUBBLE,
})

export const showBubble = () => ({
    type: ActionTypes.SHOW_BUBBLE,
})

export const hideBubble = () => ({
    type: ActionTypes.HIDE_BUBBLE,
})

export const moveBubble = (position) => ({
    type: ActionTypes.MOVE_BUBBLE,
    position,
})

export const updateBubbleInfos = (args) => ({
    type: ActionTypes.UPDATE_BUBBLE_INFOS,
    args,
})

export const updateBubbleSize = (width, height) => ({
    type: ActionTypes.UPDATE_BUBBLE_SIZE,
    width,
    height,
})