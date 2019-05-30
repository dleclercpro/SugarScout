import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'

const AxisBGReducer = (state = States.INIT_AXIS_BG_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_BG_AXIS:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default AxisBGReducer