import * as ActionTypes from 'constants/ActionTypes'

const INIT_BUBBLE_STATE = {
    status: '',
    type: '',
    position: {},
}

const BubbleReducer = (state = INIT_BUBBLE_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_BUBBLE:
            return {
                ...state,
                ...action.args,
            }

        case ActionTypes.SHOW_BUBBLE:
            return {
                ...state,
                status: 'visible',
            }

        case ActionTypes.HIDE_BUBBLE:
            return {
                ...state,
                status: 'hidden',
            }

        case ActionTypes.MOVE_BUBBLE:
            return {
                ...state,
                position: action.position,
            }

        case ActionTypes.RESET_BUBBLE:
            return { ...INIT_BUBBLE_STATE }

        default:
            return state
    }
}

export default BubbleReducer