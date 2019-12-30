import { RESET_BUBBLE, SHOW_BUBBLE, HIDE_BUBBLE, MOVE_BUBBLE, RESIZE_BUBBLE, UPDATE_BUBBLE } from 'constants/ActionTypes';

const INIT_BUBBLE_STATE = {
    status: 'hidden',
    target: '',
    position: {},
    width: 0,
    height: 0,
};

const BubbleReducer = (state = INIT_BUBBLE_STATE, action) => {
    switch (action.type) {
        case RESET_BUBBLE:
            return { ...INIT_BUBBLE_STATE };
            
        case SHOW_BUBBLE:
            return {
                ...state,
                status: 'visible',
            };

        case HIDE_BUBBLE:
            return {
                ...state,
                status: 'hidden',
            };

        case MOVE_BUBBLE:
            const distanceFromMouse = 8;
            let top = action.position.top - distanceFromMouse;
            let left = action.position.left + distanceFromMouse;

            if (top - state.height < 0) {
                top += state.height + 2 * distanceFromMouse;
            }

            if (left + state.width > window.innerWidth) {
                left -= state.width + 2 * distanceFromMouse;
            }

            return {
                ...state,
                position: { top, left },
            };

        case RESIZE_BUBBLE:
            return {
                ...state,
                width: action.width,
                height: action.height,
            };

        case UPDATE_BUBBLE:
            return {
                ...state,
                ...action.args,
            };

        default:
            return state;
    }
};

export default BubbleReducer;