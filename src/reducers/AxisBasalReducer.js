import * as Units from 'constants/Units'
import * as Basal from 'constants/Basal'
import * as ActionTypes from 'constants/ActionTypes'

const INIT_AXIS_BASAL_STATE = {
    units: Units.BASAL,
    scale: Basal.AXIS_SCALE,
}

const AxisBasalReducer = (state = INIT_AXIS_BASAL_STATE, action) => {
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