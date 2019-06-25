import moment from 'moment'
import * as Time from 'constants/Time'

export const getRange = (x) => {
    return [...Array(x).keys()]
}

export const getRangeFromTo = (start, end) => {
    return getRange(end - start + 1).map((x) => x + start)
}

export const getArrayAverage = (array, callback = x => x) => {
    return array.reduce((a, b) => callback(a) + callback(b), 0) / array.length
}

export const getArrayMin = (array, callback = x => x) => {
    return array.reduce((a, b) => callback(a) < callback(b) ? a : b, array[0])
}

export const getArrayMax = (array, callback = x => x) => {
    return array.reduce((a, b) => callback(a) > callback(b) ? a : b, array[0])
}

export const getArrayLast = (elements) => {
    if (elements) {
        return elements[elements.length - 1]
    }
}

export const compareTimeData = (a, b) => {
    if (a.getTime() < b.getTime()) { return -1 }
    if (a.getTime() > b.getTime()) { return 1 }
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
export const formatAgeDays = age => Math.floor(age / 24).toFixed(0)
export const formatAgeHours = age => (age % 24).toFixed(0)

export const getLevelType = (level, limits) => {
    if (level <= limits.VERY_LOW) { return 'very-low' }
    if (limits.VERY_LOW < level && level <= limits.LOW) { return 'low' }
}

export const getAgeType = (level, limits) => {
    if (limits.OLD <= level && level < limits.VERY_OLD) { return 'old' }
    if (limits.VERY_OLD <= level) { return 'very-old' }
}