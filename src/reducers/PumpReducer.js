import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'
import DataReducer from './DataReducer'

const PumpReducer = (state = States.INIT_PUMP_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BASAL_DATA_REQUEST:
        case ActionTypes.FETCH_BASAL_DATA_FAILURE:
        case ActionTypes.FETCH_BASAL_DATA_SUCCESS:
        case ActionTypes.FETCH_TB_DATA_REQUEST:
        case ActionTypes.FETCH_TB_DATA_FAILURE:
        case ActionTypes.FETCH_TB_DATA_SUCCESS:
            return {
                ...state,
                data: DataReducer(state.data, action),
            }

        default:
            return state
    }
}

export default PumpReducer