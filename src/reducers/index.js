import { combineReducers } from 'redux'
import Bubble from './Bubble';
import AxisTime from './AxisTime'
import AxisBG from './AxisBG'
import AxisBasal from './AxisBasal';
import CGM from './CGM';

const rootReducer = combineReducers({
    bubble: Bubble,
    axes: combineReducers({
        time: AxisTime,
        bg: AxisBG,
        basal: AxisBasal,
    }),
    cgm: CGM,
})

export default rootReducer