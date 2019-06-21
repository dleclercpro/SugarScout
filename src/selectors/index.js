import { createSelector } from 'reselect'
import * as DataTypes from 'constants/DataTypes'
import * as Time from 'constants/Time'
import * as BG from 'constants/BG'
import * as lib from 'lib'


// Time
const getCurrentTime = (state) => state.time.now.getTime()


// Data
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
    return items.filter(item => item.getTime() >= now - window)
}

const getCurrentHourlyBracket = (now, brackets) => {
    return brackets
        .filter(bracket => bracket.getTime() <= now)
        .reduce((prevBracket, bracket) => prevBracket.getTime() > bracket.getTime() ? prevBracket : bracket, brackets[0])
}

const getLastItem = (items) => {
    return items[items.length - 1]
}


// Visible items
export const getVisibleBGs = createSelector([getCurrentTime, getBGs], getVisibleItems)
export const getVisibleNetBasals = createSelector([getCurrentTime, getNetBasals], getVisibleItems)
export const getVisibleBoluses = createSelector([getCurrentTime, getBoluses], getVisibleItems)
export const getVisibleIOBs = createSelector([getCurrentTime, getIOBs], getVisibleItems)


// Current bracket
export const getCurrentBasal = createSelector([getCurrentTime, getBasals], getCurrentHourlyBracket)
export const getCurrentISF = createSelector([getCurrentTime, getISFs], getCurrentHourlyBracket)
export const getCurrentCSF = createSelector([getCurrentTime, getCSFs], getCurrentHourlyBracket)


// Last items
export const getCurrentBG = createSelector([getBGs], getLastItem)
export const getCurrentIOB = createSelector([getIOBs], getLastItem)
export const getCurrentCOB = createSelector([getCOBs], getLastItem)
export const getCurrentSAGE = (state) => undefined
export const getCurrentCAGE = (state) => undefined
export const getCurrentReservoirLevel = createSelector([getReservoirLevels], getLastItem)
export const getCurrentPumpBatteryLevel = createSelector([getPumpBatteryLevels], getLastItem)
export const getCurrentCGMBatteryLevel = createSelector([getCGMBatteryLevels], getLastItem)


// Misc
export const getCurrentBGDelta = createSelector(
    [getBGs],
    bgs => {
        if(bgs.length > 1) {
            return new DataTypes.TimeData(
                bgs[bgs.length - 1].getValue() - bgs[bgs.length - 2].getValue()
            )
        }

        return undefined
    }
)

export const getCurrentBGTrend = createSelector(
    [getBGs],
    bgs => {
        const nBGs = bgs.length
        const dBGdt = nBGs >= BG.N_BGS_TREND ? lib.getLinearRegressionByLeastSquares(bgs.slice(nBGs - BG.N_BGS_TREND))[0] : undefined

        if (dBGdt === undefined) {
            return new DataTypes.TimeData('→')
        }
        
        if (dBGdt < BG.TREND_DOUBLE_90_DOWN_MMOL_L_M) {
            return new DataTypes.TimeData('↓↓')
        }
    
        if (BG.TREND_DOUBLE_90_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_90_DOWN_MMOL_L_M) {
            return new DataTypes.TimeData('↓')
        }
    
        if (BG.TREND_90_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_45_DOWN_MMOL_L_M) {
            return new DataTypes.TimeData('↘')
        }
    
        if (BG.TREND_45_DOWN_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_45_UP_MMOL_L_M) {
            return new DataTypes.TimeData('→')
        }
    
        if (BG.TREND_45_UP_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_90_UP_MMOL_L_M) {
            return new DataTypes.TimeData('↗')
        }
    
        if (BG.TREND_90_UP_MMOL_L_M <= dBGdt && dBGdt < BG.TREND_DOUBLE_90_UP_MMOL_L_M) {
            return new DataTypes.TimeData('↑')
        }
    
        if (BG.TREND_DOUBLE_90_UP_MMOL_L_M <= dBGdt) {
            return new DataTypes.TimeData('↑↑')
        }
    }
)