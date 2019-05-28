import { combineReducers } from 'redux'
import AxisT from './AxisT'
import AxisBG from './AxisBG'
import AxisBasal from './AxisBasal';
import CGM from './CGM';

const rootReducer = combineReducers({
    axes: combineReducers({
        t: AxisT,
        bg: AxisBG,
        basal: AxisBasal,
    }),
    cgm: CGM,
})

export default rootReducer