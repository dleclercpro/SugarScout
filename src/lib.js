import moment from 'moment'
import * as Time from './constants/Time'

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

export const convertJSONBGs = (json) => {
    const data = json
    
    return Object.keys(data).reduce((BGs, t) => {
        BGs.push({
            time: moment(t, Time.FORMAT_LONG).valueOf(),
            value: data[t]
        })
        return BGs
    }, []).sort(compareEpochTimeData)
}

export const convertJSONBasals = (profile, json) => {
    const data = json['Basal Profile (' + profile + ')']
    
    return Object.keys(data).reduce((basals, t) => {
        basals.push({
            time: moment(t, Time.FORMAT_SHORT).valueOf(),
            value: data[t]
        })
        return basals
    }, []).sort(compareEpochTimeData)
}

export const convertJSONNetBasals = (json) => {
    const data = json['Net Basals']

    const netBasals = Object.keys(data).reduce((nbs, t) => {
        nbs.push({
            time: moment(t, Time.FORMAT_LONG).valueOf(),
            value: data[t],
        })
        return nbs
    }, []).sort(compareEpochTimeData)

    return netBasals.map((nb, index) => {
        const duration = index + 1 === netBasals.length ? 0 : netBasals[index + 1].time - nb.time
        return { ...nb, duration }
    })
}

export const convertEpochToFormatTime = (epoch, format = Time.FORMAT_LONG) => {
    return moment(epoch).format(format)
}

export const formatBG = (bg) => {
    return bg.toFixed(1)
}

export const formatBGDelta = (dbg) => {
    dbg = formatBG(dbg)
    return dbg >= 0 ? '+' + dbg : dbg
}

export const formatBasal = (basal) => {
    return basal.toFixed(2)
}