import * as actions from '../constants/Actions'

export const showBG = (index) => ({
    type: actions.SHOW_BG,
    index,
})

export const updateTimeScale = (scale, units = 'h') => ({
    type: actions.UPDATE_TIME_SCALE,
    scale,
    units,
})

export const updateTimeAxisToNow = (toNow) => ({
    type: actions.UPDATE_TIME_AXIS_TO_NOW,
    toNow,
})

export const updateTimeAxisTicks = (ticks) => ({
    type: actions.UPDATE_TIME_AXIS_TICKS,
    ticks,
})

export const updateBGAxisTicks = (ticks) => ({
    type: actions.UPDATE_BG_AXIS_TICKS,
    ticks,
})