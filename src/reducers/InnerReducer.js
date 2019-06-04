import * as ActionTypes from '../constants/ActionTypes'

export const INIT_INNER_STATE = {
    bg: {
        width: 0,
        height: 0,
    },
    basal: {
        width: 0,
        height: 0,
    },
}

const InnerReducer = (state = INIT_INNER_STATE, action) => {
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