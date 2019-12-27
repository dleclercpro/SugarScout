import * as DataTypes from 'constants/DataTypes';

const NEGATIVE_TIMED_VALUE = new DataTypes.TimeData(-1);
const ZERO_TIMED_VALUE = new DataTypes.TimeData(0);
const EMPTY_STRING_TIMED_VALUE = new DataTypes.TimeData('');

export const BG = ZERO_TIMED_VALUE;
export const DBG = ZERO_TIMED_VALUE;
export const BG_TREND = EMPTY_STRING_TIMED_VALUE;
export const BASAL = NEGATIVE_TIMED_VALUE;
export const ISF = NEGATIVE_TIMED_VALUE;
export const CSF = NEGATIVE_TIMED_VALUE;
export const IOB = NEGATIVE_TIMED_VALUE;
export const COB = NEGATIVE_TIMED_VALUE;
export const RESERVOIR = NEGATIVE_TIMED_VALUE;
export const PUMP_BATTERY = NEGATIVE_TIMED_VALUE;
export const CGM_BATTERY = NEGATIVE_TIMED_VALUE;
export const SAGE = NEGATIVE_TIMED_VALUE;
export const CAGE = NEGATIVE_TIMED_VALUE;

export const RESERVOIR_LEVELS = {
    VERY_LOW: 20.0,
    LOW: 50.0,
};

export const PUMP_BATTERY_LEVELS = {
    VERY_LOW: 1.18,
    LOW: 1.23,
};

export const CGM_BATTERY_LEVELS = {
    VERY_LOW: 15,
    LOW: 30,
};

export const SAGES = {
    VERY_OLD: 6 * 24,
    OLD: 4 * 24,
};

export const CAGES = {
    VERY_OLD: 3 * 24,
    OLD: 2 * 24,
};