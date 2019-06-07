import * as ActionTypes from 'constants/ActionTypes'
import DataReducer, { INIT_DATA_STATE } from './DataReducer'

export const INIT_PUMP_STATE = {
    company: 'Medtronic',
    model: 'MiniMed Paradigm 722',
    firmware: '2.4A 1.1',
    data: {
        basals: Object.assign({}, INIT_DATA_STATE),
        tbs: Object.assign({}, INIT_DATA_STATE),
    },
}

const PumpReducer = (state = INIT_PUMP_STATE, action) => {
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