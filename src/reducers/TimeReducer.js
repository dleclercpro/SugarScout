import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'

const TimeReducer = (state = States.INIT_TIME_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TIME:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default TimeReducer