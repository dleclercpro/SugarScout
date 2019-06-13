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

// Fetch helpers
const getFetchActions = (dataType) => {
    switch (dataType) {
        case 'bgs':
            return [fetchBGDataRequest, fetchBGDataFailure, fetchBGDataSuccess]

        case 'basals':
            return [fetchPumpDataRequest, fetchPumpDataFailure, fetchPumpDataSuccess]

        case 'netBasals':
            return [fetchTreatmentDataRequest, fetchTreatmentDataFailure, fetchTreatmentDataSuccess]

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
            error => dispatch(fetchDataFailure(dataType, error))
        )
        .then(
            json => dispatch(fetchDataSuccess(dataType, callback(json)))
        )
}

// Exports
export const fetchBGData = () => ((dispatch) => (
    fetchData(dispatch,
        'bgs',
        'reports/BG.json'
    )
))

export const fetchPumpData = (profile = 'Standard') => ((dispatch) => (
    fetchData(dispatch,
        'basals',
        'reports/pump.json'
    )
))

export const fetchTreatmentData = () => ((dispatch) => (
    fetchData(dispatch,
        'netBasals',
        'reports/treatments.json'
    )
))