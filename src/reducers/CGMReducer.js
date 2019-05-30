import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'
import DataReducer from './DataReducer'

const CGMReducer = (state = States.INIT_CGM_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BG_DATA_REQUEST:
        case ActionTypes.FETCH_BG_DATA_FAILURE:
        case ActionTypes.FETCH_BG_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, {
                    [action.dataType]: DataReducer(state.data[action.dataType], action),
                })
            })

        default:
            return state
    }
}

export default CGMReducer