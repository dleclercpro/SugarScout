import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'

const AxisTimeReducer = (state = States.INIT_AXIS_TIME_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TIME_AXIS:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default AxisTimeReducer