import * as defaults from 'constants/Defaults';

const getLevelType = (level, limits) => {
    if (level <= limits.VERY_LOW) { return 'very-low'; }
    if (limits.VERY_LOW < level && level <= limits.LOW) { return 'low'; }
};

const getAgeType = (level, limits) => {
    if (limits.OLD <= level && level < limits.VERY_OLD) { return 'old'; }
    if (limits.VERY_OLD <= level) { return 'very-old'; }
};

export const getReservoirType = value => getLevelType(value, defaults.RESERVOIR_LEVELS);
export const getPumpBatteryType = value => getLevelType(value, defaults.PUMP_BATTERY_LEVELS);
export const getCGMBatteryType = value => getLevelType(value, defaults.CGM_BATTERY_LEVELS);
export const getSAGEType = value => getAgeType(value, defaults.SAGES);
export const getCAGEType = value => getAgeType(value, defaults.CAGES);