import * as States from '../constants/States'
import * as DataTypes from '../constants/DataTypes'
import * as ActionTypes from '../constants/ActionTypes'
import DataReducer from './DataReducer'

const PumpReducer = (state = States.INIT_PUMP_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BASAL_DATA_REQUEST:
        case ActionTypes.FETCH_BASAL_DATA_FAILURE:
        case ActionTypes.FETCH_BASAL_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, {
                    [action.dataType]: DataReducer(DataTypes.DATA_BASAL, state.data[action.dataType], action),
                })
            })

        default:
            return state
    }
}

export default PumpReducer