import * as lib from '../lib'
import * as actions from '../constants/ActionTypes'

export const resetBubble = () => ({
    type: actions.RESET_BUBBLE,
})

export const moveBubble = (position) => ({
    type: actions.MOVE_BUBBLE,
    position,
})

export const updateBubble = (args) => ({
    type: actions.UPDATE_BUBBLE,
    args,
})

export const updateTimeAxis = (args) => ({
    type: actions.UPDATE_TIME_AXIS,
    args,
})

export const updateBGAxis = (args) => ({
    type: actions.UPDATE_BG_AXIS,
    args,
})

export const updateBasalAxis = (args) => ({
    type: actions.UPDATE_BASAL_AXIS,
    args,
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