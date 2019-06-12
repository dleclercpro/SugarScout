import * as ActionTypes from 'constants/ActionTypes'

export const INIT_DATA_STATE = {
    isFetching: false,
    error: '',
    data: [],
}

const DataReducer = (state = INIT_DATA_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BG_DATA_REQUEST:
        case ActionTypes.FETCH_PUMP_DATA_REQUEST:
        case ActionTypes.FETCH_TREATMENT_DATA_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: '',
                data: [],
            }

        case ActionTypes.FETCH_BG_DATA_FAILURE:
        case ActionTypes.FETCH_PUMP_DATA_FAILURE:
        case ActionTypes.FETCH_TREATMENT_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
                data: [],
            }

        case ActionTypes.FETCH_BG_DATA_SUCCESS:
        case ActionTypes.FETCH_PUMP_DATA_SUCCESS:
        case ActionTypes.FETCH_TREATMENT_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                data: action.data,
            }

        default:
            return state
    }
}

export default DataReducer