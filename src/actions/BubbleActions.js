import { RESET_BUBBLE, SHOW_BUBBLE, HIDE_BUBBLE, MOVE_BUBBLE, UPDATE_BUBBLE, RESIZE_BUBBLE } from 'constants/ActionTypes';

export const resetBubble = () => ({
    type: RESET_BUBBLE,
});

export const showBubble = () => ({
    type: SHOW_BUBBLE,
});

export const hideBubble = () => ({
    type: HIDE_BUBBLE,
});

export const moveBubble = (position) => ({
    type: MOVE_BUBBLE,
    position,
});

export const resizeBubble = (width, height) => ({
    type: RESIZE_BUBBLE,
    width,
    height,
});

export const updateBubble = (args) => ({
    type: UPDATE_BUBBLE,
    args,
});