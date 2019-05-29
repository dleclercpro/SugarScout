import * as actions from '../constants/ActionTypes'

const INIT_STATE = {
    status: 'invisible',
    type: '',
    position: {
        top: 0,
        right: 0,
    },
    time: '',
    info: {
        value: '',
        units: '',
    },
}

const Bubble = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.UPDATE_BUBBLE:
            return {
                ...state,
                ...action.args,
            }
        case actions.RESET_BUBBLE:
            return INIT_STATE

        default:
            return state
    }
}

export default Bubble