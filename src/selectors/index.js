import * as Time from '../constants/Time'
import * as DataTypes from '../constants/DataTypes'
import { createSelector } from 'reselect'

const getNow = (state) => state.time.now.getTime()
const getBGs = (state) => state.cgm.data[DataTypes.DATA_BG].data
const getTBs = (state) => state.pump.data[DataTypes.DATA_TB].data
const timeWindow = Math.max(...Time.SCALES) * 60 * 60 * 1000

export const getVisibleBGs = createSelector(
    [getNow, getBGs],
    (now, bgs) => {
        return bgs.filter(bg => bg.time >= now - timeWindow)
    }
)

export const getVisibleTBs = createSelector(
    [getNow, getTBs],
    (now, tbs) => {
        return tbs.filter(tb => tb.time >= now - timeWindow)
    }
)