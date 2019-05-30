import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'

const BubbleReducer = (state = States.INIT_BUBBLE_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_BUBBLE:
            return {
                ...state,
                ...action.args,
            }

        case ActionTypes.MOVE_BUBBLE:
            return {
                ...state,
                position: action.position,
            }

        case ActionTypes.RESET_BUBBLE:
            return States.INIT_BUBBLE_STATE

        default:
            return state
    }
}

export default BubbleReducer