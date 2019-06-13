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

export const compareEpochTimeData = (a, b) => {
    if (a.time < b.time) { return -1 }
    if (a.time > b.time) { return 1 }
    return 0
}

export const convertEpochToFormatTime = (epoch, format = Time.FORMAT_LONG) => {
    return moment(epoch).format(format)
}

export const formatBG = (bg) => {
    return bg.toFixed(1)
}

export const formatBGDelta = (dbg) => {
    return dbg >= 0 ? '+' + formatBG(dbg) : formatBG(dbg)
}

export const formatBasal = (basal) => {
    return basal.toFixed(2)
}