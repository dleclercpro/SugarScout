import * as BG from '../constants/BG'
import * as ActionTypes from '../constants/ActionTypes'
import DataReducer, { INIT_DATA_STATE } from './DataReducer'

export const INIT_CGM_STATE = {
    company: 'Dexcom',
    model: 'G4',
    firmware: '',
    units: BG.UNIT,
    data: {
        bgs: Object.assign({}, INIT_DATA_STATE),
    },
}

const CGMReducer = (state = INIT_CGM_STATE, action) => {
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