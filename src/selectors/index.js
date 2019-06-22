import { createSelector } from 'reselect'
import * as DataTypes from 'constants/DataTypes'
import * as Time from 'constants/Time'
import * as BG from 'constants/BG'
import * as lib from 'lib'


// Time
const getCurrentTime = (state) => state.time.now


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
const getCGMStatuses = (state) => state.data.history.data.cgm.statuses


// Helpers
const getVisibleItems = (now, items, window = Time.WINDOW) => {
    return items.filter(item => item.getTime() >= now.getTime() - window)
}

const getCurrentTimeBracket = (now, brackets) => {
    return brackets
        .filter(bracket => bracket.getTime() <= now.getTime())
        .reduce((prevBracket, bracket) => prevBracket.getTime() > bracket.getTime() ? prevBracket : bracket, brackets[0])
}

const getLastItem = (items) => {
    if (items) {
        return items[items.length - 1]
    }

    return undefined
}

const getLastCGMStartStatus = (statuses) => {
    return getLastItem(statuses.filter(status => status.getValue() === 'Started'))
}


// Visible items
export const getVisibleBGs = createSelector([getCurrentTime, getBGs], getVisibleItems)
export const getVisibleNetBasals = createSelector([getCurrentTime, getNetBasals], getVisibleItems)
export const getVisibleBoluses = createSelector([getCurrentTime, getBoluses], getVisibleItems)
export const getVisibleIOBs = createSelector([getCurrentTime, getIOBs], getVisibleItems)


// Current time bracket
export const getCurrentBasal = createSelector([getCurrentTime, getBasals], getCurrentTimeBracket)
export const getCurrentISF = createSelector([getCurrentTime, getISFs], getCurrentTimeBracket)
export const getCurrentCSF = createSelector([getCurrentTime, getCSFs], getCurrentTimeBracket)


// Last items
export const getCurrentBG = createSelector([getBGs], getLastItem)
export const getCurrentIOB = createSelector([getIOBs], getLastItem)
export const getCurrentCOB = createSelector([getCOBs], getLastItem)
export const getCurrentReservoirLevel = createSelector([getReservoirLevels], getLastItem)
export const getCurrentPumpBatteryLevel = createSelector([getPumpBatteryLevels], getLastItem)
export const getCurrentCGMBatteryLevel = createSelector([getCGMBatteryLevels], getLastItem)


// Misc
export const getCurrentSAGE = createSelector(
    [getCurrentTime, getCGMStatuses],
    (now, statuses) => {
        if (statuses) {
            const last = getLastCGMStartStatus(statuses)

            if (last) {
                return new DataTypes.TimeData(
                    (now.getTime() - last.getTime()) / 60 / 60 / 1000 // (h)
                )
            }
        }

        return undefined
    }
)

export const getCurrentCAGE = (state) => undefined

export const getCurrentBGDelta = createSelector(
    [getBGs],
    bgs => {
        if (bgs.length > 1) {
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