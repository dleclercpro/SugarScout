import * as States from '../constants/States'
import * as DataTypes from '../constants/DataTypes'
import * as ActionTypes from '../constants/ActionTypes'

const DataReducer = (state = States.INIT_DATA_STATE, action) => {
    let request, failure, success

    switch (action.dataType) {
        case DataTypes.DATA_BG:
            [ request, failure, success ] = [
                ActionTypes.FETCH_BG_DATA_REQUEST,
                ActionTypes.FETCH_BG_DATA_FAILURE,
                ActionTypes.FETCH_BG_DATA_SUCCESS
            ]
            break

        case DataTypes.DATA_BASAL:
            [ request, failure, success ] = [
                ActionTypes.FETCH_BASAL_DATA_REQUEST,
                ActionTypes.FETCH_BASAL_DATA_FAILURE,
                ActionTypes.FETCH_BASAL_DATA_SUCCESS
            ]
            break

        default:
            throw new Error('Data reducer of type ' + action.dataType + ' not yet implemented.')
    }

    switch (action.type) {
        case request:
            return {
                ...state,
                isFetching: true,
                isError: false,
            }

        case failure:
            return {
                ...state,
                isFetching: false,
                isError: true,
            }

        case success:
            return {
                ...state,
                isFetching: false,
                isError: false,
                data: action.data,
            }

        default:
            return state
    }
}

export default DataReducer