import * as Time from 'constants/Time'
import { createSelector } from 'reselect'

const getNow = (state) => state.time.now.getTime()
const getBGs = (state) => state.data.bgs.data.bgs
const getNetBasals = (state) => state.data.treatments.data.netBasals
const timeWindow = Math.max(...Time.SCALES) * 60 * 60 * 1000

export const getVisibleBGs = createSelector(
    [getNow, getBGs],
    (now, bgs) => {
        return bgs.filter(bg => bg.time >= now - timeWindow)
    }
)

export const getVisibleNetBasals = createSelector(
    [getNow, getNetBasals],
    (now, netBasals) => {
        return netBasals.filter(netBasal => netBasal.time >= now - timeWindow)
    }
)