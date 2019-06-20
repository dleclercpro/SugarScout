import * as DataTypes from 'constants/DataTypes'
import * as ActionTypes from 'constants/ActionTypes'

// BG data
const fetchBGDataRequest = (dataType) => ({
    type: ActionTypes.FETCH_BG_DATA_REQUEST,
    dataType,
})

const fetchBGDataFailure = (dataType, error) => ({
    type: ActionTypes.FETCH_BG_DATA_FAILURE,
    dataType,
    error,
})

const fetchBGDataSuccess = (dataType, data) => ({
    type: ActionTypes.FETCH_BG_DATA_SUCCESS,
    dataType,
    data,
})

// Pump data
const fetchPumpDataRequest = (dataType) => ({
    type: ActionTypes.FETCH_PUMP_DATA_REQUEST,
    dataType,
})

const fetchPumpDataFailure = (dataType, error) => ({
    type: ActionTypes.FETCH_PUMP_DATA_FAILURE,
    dataType,
    error,
})

const fetchPumpDataSuccess = (dataType, data) => ({
    type: ActionTypes.FETCH_PUMP_DATA_SUCCESS,
    dataType,
    data,
})

// Treatment data
const fetchTreatmentDataRequest = (dataType) => ({
    type: ActionTypes.FETCH_TREATMENT_DATA_REQUEST,
    dataType,
})

const fetchTreatmentDataFailure = (dataType, error) => ({
    type: ActionTypes.FETCH_TREATMENT_DATA_FAILURE,
    dataType,
    error,
})

const fetchTreatmentDataSuccess = (dataType, data) => ({
    type: ActionTypes.FETCH_TREATMENT_DATA_SUCCESS,
    dataType,
    data,
})

// History data
const fetchHistoryDataRequest = (dataType) => ({
    type: ActionTypes.FETCH_HISTORY_DATA_REQUEST,
    dataType,
})

const fetchHistoryDataFailure = (dataType, error) => ({
    type: ActionTypes.FETCH_HISTORY_DATA_FAILURE,
    dataType,
    error,
})

const fetchHistoryDataSuccess = (dataType, data) => ({
    type: ActionTypes.FETCH_HISTORY_DATA_SUCCESS,
    dataType,
    data,
})

// Fetch helpers
const getFetchActions = (dataType) => {
    switch (dataType) {
        case DataTypes.BG:
            return [fetchBGDataRequest, fetchBGDataFailure, fetchBGDataSuccess]

        case DataTypes.PUMP:
            return [fetchPumpDataRequest, fetchPumpDataFailure, fetchPumpDataSuccess]

        case DataTypes.TREATMENT:
            return [fetchTreatmentDataRequest, fetchTreatmentDataFailure, fetchTreatmentDataSuccess]

        case DataTypes.HISTORY:
            return [fetchHistoryDataRequest, fetchHistoryDataFailure, fetchHistoryDataSuccess]

        default:
            throw new Error('Fetching this data type not yet implemented.')
    }
}

const fetchData = (dispatch, dataType, src, callback = json => json) => {
    const [ fetchDataRequest, fetchDataFailure, fetchDataSuccess ] = getFetchActions(dataType)

    dispatch(fetchDataRequest(dataType))

    return fetch(src)
        .then(
            response => response.json(),
        ).then(
            json => dispatch(fetchDataSuccess(dataType, callback(json)))
        ).catch(
            error => dispatch(fetchDataFailure(dataType, error))
        )
}

// Exports
export const fetchBGData = () => ((dispatch) => (
    fetchData(dispatch,
        DataTypes.BG,
        'reports/BG.json'
    )
))

export const fetchPumpData = () => ((dispatch) => (
    fetchData(dispatch,
        DataTypes.PUMP,
        'reports/pump.json'
    )
))

export const fetchTreatmentData = () => ((dispatch) => (
    fetchData(dispatch,
        DataTypes.TREATMENT,
        'reports/treatments.json'
    )
))

export const fetchHistoryData = () => ((dispatch) => (
    fetchData(dispatch,
        DataTypes.HISTORY,
        'reports/history.json'
    )
))