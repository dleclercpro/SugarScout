import * as lib from '../lib'
import * as DataTypes from '../constants/DataTypes'
import * as ActionTypes from '../constants/ActionTypes'

// BGs
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

// Basals
const fetchBasalDataRequest = (dataType) => ({
    type: ActionTypes.FETCH_BASAL_DATA_REQUEST,
    dataType,
})

const fetchBasalDataFailure = (dataType, error) => ({
    type: ActionTypes.FETCH_BASAL_DATA_FAILURE,
    dataType,
    error,
})

const fetchBasalDataSuccess = (dataType, data) => ({
    type: ActionTypes.FETCH_BASAL_DATA_SUCCESS,
    dataType,
    data,
})

// Fetch helper
const getFetchActions = (dataType) => {
    switch (dataType) {
        case DataTypes.DATA_BG:
            return [fetchBGDataRequest, fetchBGDataFailure, fetchBGDataSuccess]

        case DataTypes.DATA_BASAL:
            return [fetchBasalDataRequest, fetchBasalDataFailure, fetchBasalDataSuccess]

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
export const fetchBGs = () => ((dispatch) => (
    fetchData(dispatch,
        DataTypes.DATA_BG,
        '../reports/BG.json',
        lib.convertJSONBGs
    )
))

export const fetchBasals = (profile = 'Standard') => ((dispatch) => (
    fetchData(dispatch,
        DataTypes.DATA_BASAL,
        '../reports/pump.json',
        (json) => lib.convertJSONBasals(json['Basal Profile (' + profile + ')'])
    )
))