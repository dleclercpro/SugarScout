import * as Units from 'constants/Units'
import * as BG from 'constants/BG'
import * as ActionTypes from 'constants/ActionTypes'

const INIT_AXIS_BG_STATE = {
    units: Units.BG,
    scale: BG.AXIS_SCALE,
}

const AxisBGReducer = (state = INIT_AXIS_BG_STATE, action) => {
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