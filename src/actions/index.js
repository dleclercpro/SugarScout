import * as lib from '../lib'
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

export const fetchDataRequest = (dataType) => ({
    type: actions.FETCH_DATA_REQUEST,
    dataType,
})

export const fetchDataFailure = (dataType, error) => ({
    type: actions.FETCH_DATA_FAILURE,
    dataType,
    error,
})

export const fetchDataSuccess = (dataType, data) => ({
    type: actions.FETCH_DATA_SUCCESS,
    dataType,
    data,
})

export const fetchData = (dispatch, dataType, src, callback = json => json) => {
    dispatch(fetchDataRequest(dataType))
    return fetch(src)
        .then(
            response => response.json(),
            error => dispatch(fetchDataFailure(dataType, error))
        )
        .then(
            json => dispatch(fetchDataSuccess(dataType, callback(json)))
        )
}

export const fetchBGs = () => ((dispatch) => (
    fetchData(dispatch, 'bgs', '../reports/BG.json', lib.convertJSONBGs)
))