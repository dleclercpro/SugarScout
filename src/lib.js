import moment from 'moment'
import * as Time from 'constants/Time'

export const getRange = (x) => {
    return [...Array(x).keys()]
}

export const getRangeFromTo = (start, end) => {
    return getRange(end - start + 1).map((x) => x + start)
}

export const getArrayAverage = (array) => {
    return array.reduce((a, b) => a + b, 0) / array.length
}

// TODO
export const getLinearRegressionByLeastSquares = (array) => {
    const m = 0
    const b = 0
    return [m, b]
}

export const compareTimeData = (a, b) => {
    if (a.getTime() < b.getTime()) {
        return -1
    }

    if (a.getTime() > b.getTime()) {
        return 1
    }
    
    return 0
}

export const convertEpochToFormatTime = (epoch, format = Time.FORMAT_LONG) => {
    return moment(epoch).format(format)
}

export const formatBG = bg => bg.toFixed(1)
export const formatdBG = dbg => dbg >= 0 ? '+' + formatBG(dbg) : formatBG(dbg)
export const formatBasal = basal => basal.toFixed(2)
export const formatBolus = bolus => bolus.toFixed(1)
export const formatISF = isf => isf.toFixed(1)
export const formatCSF = csf => csf.toFixed(0)
export const formatIOB = iob => iob.toFixed(1)
export const formatCOB = cob => cob.toFixed(0)
export const formatReservoir = reservoir => reservoir.toFixed(1)
export const formatPumpBattery = battery => battery.toFixed(2)
export const formatCGMBattery = battery => battery.toFixed(0)
export const formatSAGE = age => age.toFixed(0)
export const formatCAGE = age => age.toFixed(0)