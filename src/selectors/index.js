import { createSelector } from 'reselect'
import * as Time from 'constants/Time'
import * as BG from 'constants/BG'
import * as lib from 'lib'

const timeWindow = Math.max(...Time.SCALES) * 60 * 60 * 1000

const getNow = (state) => state.time.now.getTime()
const getBGs = (state) => state.data.bgs.data.bgs
const getBasals = (state) => state.data.pump.data.basals
const getNetBasals = (state) => state.data.treatments.data.netBasals
const getBoluses = (state) => state.data.treatments.data.boluses
const getISFs = (state) => state.data.pump.data.isfs
const getCSFs = (state) => state.data.pump.data.csfs

const getItemsWithinTimeWindow = (now, items) => items
    .filter(item => item.time >= now - timeWindow)

const getCurrentItem = (now, items) => {
    const beforeNowItems = items.filter(item => item.time <= now)
    return beforeNowItems.reduce((prevItem, item) => prevItem.time > item.time ? prevItem : item, beforeNowItems[0])
}

export const getVisibleBGs = createSelector(
    [getNow, getBGs],
    getItemsWithinTimeWindow
)

export const getVisibleNetBasals = createSelector(
    [getNow, getNetBasals],
    getItemsWithinTimeWindow
)

export const getVisibleBoluses = createSelector(
    [getNow, getBoluses],
    getItemsWithinTimeWindow
)

export const getCurrentBG = createSelector(
    [getBGs],
    bgs => bgs.length ? bgs[bgs.length - 1] : undefined
)

export const getCurrentBGDelta = createSelector(
    [getBGs],
    bgs => bgs.length > 1 ? bgs[bgs.length - 1].value - bgs[bgs.length - 2].value : undefined
)

export const getCurrentBasal = createSelector(
    [getNow, getBasals],
    getCurrentItem
)

export const getCurrentISF = createSelector(
    [getNow, getISFs],
    getCurrentItem
)

export const getCurrentCSF = createSelector(
    [getNow, getCSFs],
    getCurrentItem
)

const getBGTrendArrow = (dBGdt) => {

    if (dBGdt === undefined) {
        return ''
    }

    if (dBGdt < BG.TREND_DOUBLE_90_DOWN_MMOL_L_M) {
        return '↓↓'
    }

    if (BG.TREND_DOUBLE_90_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_90_DOWN_MMOL_L_M) {
        return '↓'
    }

    if (BG.TREND_90_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_45_DOWN_MMOL_L_M) {
        return '↘'
    }

    if (BG.TREND_45_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_45_UP_MMOL_L_M) {
        return '→'
    }

    if (BG.TREND_45_UP_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_90_UP_MMOL_L_M) {
        return '↗'
    }

    if (BG.TREND_90_UP_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_DOUBLE_90_UP_MMOL_L_M) {
        return '↑'
    }

    if (BG.TREND_DOUBLE_90_UP_MMOL_L_M <= dBGdt) {
        return '↑↑'
    }
}

export const getCurrentBGTrend = createSelector(
    [getBGs],
    bgs => {
        const nBGs = bgs.length
        const dBGdt = nBGs >= BG.N_BGS_TREND ? lib.getLinearRegressionByLeastSquares(bgs.slice(nBGs - BG.N_BGS_TREND))[0] : undefined
        return getBGTrendArrow(dBGdt)
    }
)