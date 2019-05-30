import * as actions from '../constants/ActionTypes'

const INIT_STATE = {
    status: 'invisible',
    type: '',
    position: {},
    time: '',
    info: {
        value: '',
        units: '',
    },
}

const BubbleReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.UPDATE_BUBBLE:
            return {
                ...state,
                ...action.args,
            }

        case actions.MOVE_BUBBLE:
            return {
                ...state,
                position: action.position,
            }

        case actions.RESET_BUBBLE:
            return INIT_STATE

        default:
            return state
    }
}

export default BubbleReducer