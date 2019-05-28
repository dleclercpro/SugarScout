import moment from 'moment'
import * as time from './constants/Time'

export const getRange = (x) => [...Array(x).keys()]

export const getRangeFromTo = (start, end) => getRange(end - start + 1).map((x) => x + start)

export const convertJSONBGs = (json) => (
    Object.keys(json).reduce((BGs, t) => {
        BGs.push({
            t: moment(t, time.FORMAT).valueOf(), // Epoch time in current time zone (ms)
            value: json[t]
        })
        return BGs
    }, [])
)