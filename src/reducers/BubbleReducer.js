import * as ActionTypes from 'constants/ActionTypes'

const INIT_BUBBLE_STATE = {
    status: 'hidden',
    target: '',
    position: {},
    width: 0,
    height: 0,
}

const BubbleReducer = (state = INIT_BUBBLE_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESET_BUBBLE:
            return {
                ...INIT_BUBBLE_STATE,
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
            const distanceFromMouse = 8
            let top = action.position.top - distanceFromMouse
            let left = action.position.left + distanceFromMouse

            if (action.position.top - state.height < 0) {
                top += state.height + 2 * distanceFromMouse
            }

            if (action.position.left + state.width > window.innerWidth) {
                left -= state.width + 2 * distanceFromMouse
            }

            return {
                ...state,
                position: { top, left },
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