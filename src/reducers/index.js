import * as Redux from 'redux'
import AxisT from './AxisT'
import AxisBG from './AxisBG'
import CGM from './CGM';

const rootReducer = Redux.combineReducers({
    axes: Redux.combineReducers({
        t: AxisT,
        bg: AxisBG,
    }),
    cgm: CGM,
})

export default rootReducer