import moment from 'moment'
import * as Time from './constants/Time'

export const getRange = (x) => {
    return [...Array(x).keys()]
}

export const getRangeFromTo = (start, end) => {
    return getRange(end - start + 1).map((x) => x + start)
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

export const convertJSONTBs = (json) => {
    const data = json['Net Basals']

    return Object.keys(data).reduce((tbs, t) => {
        tbs.push({
            time: moment(t, Time.FORMAT_LONG).valueOf(),
            value: data[t][0],
            duration: data[t][1] * 1000,
        })
        return tbs
    }, []).sort(compareEpochTimeData)
}

export const convertEpochToFormatTime = (epoch, format = Time.FORMAT_LONG) => {
    return moment(epoch).format(format)
}

export const formatBG = (bg) => {
    return bg.toFixed(1)
}

export const formatBasal = (basal) => {
    return basal.toFixed(2)
}