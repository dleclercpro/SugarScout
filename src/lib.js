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
            time: moment(t, time.FORMAT).valueOf(), // Epoch time in current time zone (ms)
            value: json[t]
        })
        return BGs
    }, [])
}

export const convertEpochToFormattedTime = (epoch) => {
    return moment(epoch).format(time.FORMAT)
}

export const formatBG = (bg) => {
    return bg.toFixed(1)
}