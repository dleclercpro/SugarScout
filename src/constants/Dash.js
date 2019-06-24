import * as DataTypes from 'constants/DataTypes'

const NEGATIVE_TIMED_VALUE = new DataTypes.TimeData(-1)
const ZERO_TIMED_VALUE = new DataTypes.TimeData(0)
const EMPTY_STRING_TIMED_VALUE = new DataTypes.TimeData('')

export const DEFAULT_BG = ZERO_TIMED_VALUE
export const DEFAULT_DBG = ZERO_TIMED_VALUE
export const DEFAULT_BG_TREND = EMPTY_STRING_TIMED_VALUE
export const DEFAULT_BASAL = NEGATIVE_TIMED_VALUE
export const DEFAULT_ISF = NEGATIVE_TIMED_VALUE
export const DEFAULT_CSF = NEGATIVE_TIMED_VALUE
export const DEFAULT_IOB = NEGATIVE_TIMED_VALUE
export const DEFAULT_COB = NEGATIVE_TIMED_VALUE
export const DEFAULT_RESERVOIR = NEGATIVE_TIMED_VALUE
export const DEFAULT_PUMP_BATTERY = NEGATIVE_TIMED_VALUE
export const DEFAULT_CGM_BATTERY = NEGATIVE_TIMED_VALUE
export const DEFAULT_SENSOR_AGE = NEGATIVE_TIMED_VALUE
export const DEFAULT_CANULA_AGE = NEGATIVE_TIMED_VALUE

export const RESERVOIR_LEVELS = {
    VERY_LOW: 20.0,
    LOW: 50.0,
}

export const PUMP_BATTERY_LEVELS = {
    VERY_LOW: 1.27,
    LOW: 1.30,
}

export const CGM_BATTERY_LEVELS = {
    VERY_LOW: 15,
    LOW: 30,
}

export const SENSOR_AGES = {
    VERY_OLD: 6 * 24,
    OLD: 4 * 24,
}

export const CANULA_AGES = {
    VERY_OLD: 3 * 24,
    OLD: 2 * 24,
}