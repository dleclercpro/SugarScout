import { combineReducers } from 'redux'
import TimeReducer from './TimeReducer'
import BubbleReducer from './BubbleReducer'
import AxisTimeReducer from './AxisTimeReducer'
import AxisBGReducer from './AxisBGReducer'
import AxisBasalReducer from './AxisBasalReducer'
import PumpReducer from './PumpReducer'
import CGMReducer from './CGMReducer'

const rootReducer = combineReducers({
    time: TimeReducer,
    bubble: BubbleReducer,
    axes: combineReducers({
        time: AxisTimeReducer,
        bg: AxisBGReducer,
        basal: AxisBasalReducer,
    }),
    pump: PumpReducer,
    cgm: CGMReducer,
})

export default rootReducer