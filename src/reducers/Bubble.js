import * as actions from '../constants/ActionTypes'

const INIT_STATE = {
    node: null,
    status: 'invisible',
    position: {
        top: 0,
        right: 0,
    },
    time: '',
    info: '',
}

const Bubble = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.UPDATE_BUBBLE:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default Bubble