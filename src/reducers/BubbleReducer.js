import * as ActionTypes from 'constants/ActionTypes'

const INIT_BUBBLE_STATE = {
    status: 'hidden',
    target: '',
    position: {},
    width: -1,
    height: -1,
}

const BubbleReducer = (state = INIT_BUBBLE_STATE, action) => {
    switch (action.type) {
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

        case ActionTypes.UPDATE_BUBBLE_INFOS:
            return {
                ...state,
                ...action.args,
            }

        case ActionTypes.UPDATE_BUBBLE_SIZE:
            return {
                ...state,
                width: action.width,
                height: action.height,
            }

        default:
            return state
    }
}

export default BubbleReducer