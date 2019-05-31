import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'
import DataReducer from './DataReducer'

const CGMReducer = (state = States.INIT_CGM_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BG_DATA_REQUEST:
        case ActionTypes.FETCH_BG_DATA_FAILURE:
        case ActionTypes.FETCH_BG_DATA_SUCCESS:
            return {
                ...state,
                data: DataReducer(state.data, action),
            }

        default:
            return state
    }
}

export default CGMReducer