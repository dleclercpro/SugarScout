export const UNIT = 'mmol/L'

// Axis
export const AXIS_SCALE = 'linear'
export const AXIS_MIN_MMOL_L = 0
export const AXIS_MAX_MMOL_L = 18
export const AXIS_MIN_MG_DL = AXIS_MIN_MMOL_L * 18
export const AXIS_MAX_MG_DL = AXIS_MAX_MMOL_L * 18
export const AXIS_VALUES = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18] // Last value won't show

// Thresholds
export const VERY_LOW = 3.0
export const LOW = 4.0
export const HIGH = 7.0
export const VERY_HIGH = 10.0