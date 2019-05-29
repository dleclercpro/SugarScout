import * as basal from '../constants/Basal'

const INIT_STATE = {
    units: basal.UNIT,
    scale: basal.AXIS_SCALE,
    range: [
        basal.AXIS_MIN_U_H,
        basal.AXIS_MAX_U_H
    ],
    ticks: [],
}

const AxisBasalReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default AxisBasalReducer