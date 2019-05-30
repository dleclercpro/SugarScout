import * as States from '../constants/States'
import * as ActionTypes from '../constants/ActionTypes'

const AxisBasalReducer = (state = States.INIT_AXIS_BASAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_BASAL_AXIS:
            return {
                ...state,
                ...action.args,
            }

        default:
            return state
    }
}

export default AxisBasalReducer