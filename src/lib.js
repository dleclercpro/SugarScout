import moment from 'moment'
import * as time from './constants/Time'

export const getRange = (x) => {
    return [...Array(x).keys()]
}

export const getRangeFromTo = (start, end) => {
    return getRange(end - start + 1).map((x) => x + start)
}

export const convertJSONBGs = (json) => {
    return Object.keys(json).reduce((BGs, t) => {
        BGs.push({
            time: moment(t, time.FORMAT_LONG).valueOf(),
            value: json[t]
        })
        return BGs
    }, [])
}

export const convertJSONBasals = (json) => {
    return Object.keys(json).reduce((basals, t) => {
        basals.push({
            time: moment(t, time.FORMAT_SHORT).valueOf(),
            value: json[t]
        })
        return basals
    }, [])
}

export const convertEpochToLongFormatTime = (epoch) => {
    return moment(epoch).format(time.FORMAT_LONG)
}

export const formatBG = (bg) => {
    return bg.toFixed(1)
}