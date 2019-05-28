import fetch from 'cross-fetch'
import * as actions from '../constants/ActionTypes'

export const showBG = (index) => ({
    type: actions.SHOW_BG,
    index,
})

export const updateTimeAxisScale = (scale, units = 'h') => ({
    type: actions.UPDATE_TIME_AXIS_SCALE,
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

export const fetchBGsRequest = () => ({
    type: actions.FETCH_BGS_REQUEST,
})

export const fetchBGsFailure = (error) => ({
    type: actions.FETCH_BGS_FAILURE,
    error,
})

export const fetchBGsSuccess = (data) => ({
    type: actions.FETCH_BGS_SUCCESS,
    data,
})

export const fetchBGs = () => ((dispatch) => {
    dispatch(fetchBGsRequest())

    return fetch('../reports/BG.json')
        .then(
            response => response.json(),
            error => dispatch(fetchBGsFailure(error))
        )
        .then(
            json => dispatch(fetchBGsSuccess(json))
        )
    }
)