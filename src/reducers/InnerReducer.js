import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'

const InnerReducer = (state = States.INIT_INNER_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_INNER_BG_SIZE:
            return {
                ...state,
                bg: {
                    ...state.bg,
                    width: action.width,
                    height: action.height,
                },
            }

        case ActionTypes.UPDATE_INNER_BASAL_SIZE:
            return {
                ...state,
                basal: {
                    ...state.basal,
                    width: action.width,
                    height: action.height,
                },
            }

        default:
            return state
    }
}

export default InnerReducer