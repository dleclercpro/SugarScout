import { createSelector } from 'reselect'
import * as Time from 'constants/Time'
import * as BG from 'constants/BG'
import * as Dash from 'constants/Dash'
import * as lib from 'lib'

const getNow = (state) => state.time.now.getTime()
const getBGs = (state) => state.data.bgs.data.bgs
const getBasals = (state) => state.data.pump.data.basals
const getNetBasals = (state) => state.data.treatments.data.netBasals
const getBoluses = (state) => state.data.treatments.data.boluses
const getIOBs = (state) => state.data.treatments.data.iobs
const getCOBs = (state) => state.data.treatments.data.cobs
const getISFs = (state) => state.data.pump.data.isfs
const getCSFs = (state) => state.data.pump.data.csfs
const getReservoirLevels = (state) => state.data.history.data.pump.reservoir
const getPumpBatteryLevels = (state) => state.data.history.data.pump.battery
const getCGMBatteryLevels = (state) => state.data.history.data.cgm.battery


// Helpers
const getVisibleItems = (now, items, window = Time.WINDOW) => {
    return items.filter(item => item.time >= now - window)
}

const getCurrentHourlyBracket = (now, brackets, defaultBracket = undefined) => {
    if (brackets.length) {
        return brackets
            .filter(bracket => bracket.time <= now)
            .reduce((prevBracket, bracket) => prevBracket.time > bracket.time ? prevBracket : bracket, brackets[0])
    }
    return defaultBracket
}

const getLastItem = (items, defaultItem = undefined) => {
    if (items.length) {
        return items[items.length - 1]
    }
    return defaultItem
}


// Visible items
export const getVisibleBGs = createSelector([getNow, getBGs], getVisibleItems)
export const getVisibleNetBasals = createSelector([getNow, getNetBasals], getVisibleItems)
export const getVisibleBoluses = createSelector([getNow, getBoluses], getVisibleItems)
export const getVisibleIOBs = createSelector([getNow, getIOBs], getVisibleItems)


// Current bracket
export const getCurrentBasal = createSelector([getNow, getBasals], (now, brackets) => getCurrentHourlyBracket(now, brackets, Dash.DEFAULT_BASAL))
export const getCurrentISF = createSelector([getNow, getISFs], (now, brackets) => getCurrentHourlyBracket(now, brackets, Dash.DEFAULT_ISF))
export const getCurrentCSF = createSelector([getNow, getCSFs], (now, brackets) => getCurrentHourlyBracket(now, brackets, Dash.DEFAULT_CSF))


// Last items
export const getCurrentBG = createSelector([getBGs], (items) => getLastItem(items, Dash.DEFAULT_BG))
export const getCurrentIOB = createSelector([getIOBs], (items) => getLastItem(items, Dash.DEFAULT_IOB))
export const getCurrentCOB = createSelector([getCOBs], (items) => getLastItem(items, Dash.DEFAULT_COB))
export const getCurrentReservoirLevel = createSelector([getReservoirLevels], (items) => getLastItem(items, Dash.DEFAULT_RESERVOIR))
export const getCurrentPumpBatteryLevel = createSelector([getPumpBatteryLevels], (items) => getLastItem(items, Dash.DEFAULT_PUMP_BATTERY))
export const getCurrentCGMBatteryLevel = createSelector([getCGMBatteryLevels], (items) => getLastItem(items, Dash.DEFAULT_CGM_BATTERY))


// Misc
export const getCurrentBGDelta = createSelector(
    [getBGs],
    bgs => bgs.length > 1 ? bgs[bgs.length - 1].value - bgs[bgs.length - 2].value : Dash.DEFAULT_DELTA_BG
)

export const getCurrentBGTrend = createSelector(
    [getBGs],
    bgs => {
        const nBGs = bgs.length
        const dBGdt = nBGs >= BG.N_BGS_TREND ? lib.getLinearRegressionByLeastSquares(bgs.slice(nBGs - BG.N_BGS_TREND))[0] : undefined

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
)