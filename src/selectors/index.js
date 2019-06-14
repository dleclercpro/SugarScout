import * as Time from 'constants/Time'
import { createSelector } from 'reselect'

const getNow = (state) => state.time.now.getTime()
const getBGs = (state) => state.data.bgs.data.bgs
const getNetBasals = (state) => state.data.treatments.data.netBasals
const getBoluses = (state) => state.data.treatments.data.boluses
const timeWindow = Math.max(...Time.SCALES) * 60 * 60 * 1000

const itemsWithinTimeWindow = (now, items) => items.filter(item => item.time >= now - timeWindow)

export const getVisibleBGs = createSelector(
    [getNow, getBGs],
    itemsWithinTimeWindow
)

export const getVisibleNetBasals = createSelector(
    [getNow, getNetBasals],
    itemsWithinTimeWindow
)

export const getVisibleBoluses = createSelector(
    [getNow, getBoluses],
    itemsWithinTimeWindow
)