import * as Redux from 'redux'
import AxisT from './AxisT'
import AxisBG from './AxisBG'

const rootReducer = Redux.combineReducers({
    axisT: AxisT,
    axisBG: AxisBG,
})

export default rootReducer