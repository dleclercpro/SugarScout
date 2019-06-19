export const NOW = null
export const N_HOURS_PER_DAY = 24

// Formats
export const FORMAT_SHORT = 'HH:mm'
export const FORMAT_LONG = 'YYYY.MM.DD - HH:mm:ss'

// Timescales
export const SCALES = [1, 3, 6, 12, 24]                    // (h)
export const SCALE = 6                                     // (h)
export const WINDOW = Math.max(...SCALES) * 60 * 60 * 1000 // (ms)

// Refresh
export const REFRESH_APP_RATE = 15 * 1000          // (ms)
export const REFRESH_DATA_RATE = 1 * 60 * 1000     // (ms)

// Axis
export const AXIS_N_TICKS = N_HOURS_PER_DAY

// Max ages
export const MAX_AGE_BG = 15 * 60 * 1000
export const MAX_AGE_IOB = 20 * 60 * 1000
export const MAX_AGE_COB = MAX_AGE_IOB
export const MAX_AGE_SAGE = 1 * 60 * 60 * 1000
export const MAX_AGE_CAGE = MAX_AGE_SAGE
export const MAX_AGE_RESERVOIR = 30 * 60 * 1000
export const MAX_AGE_PUMP_BATTERY = 1 * 60 * 60 * 1000
export const MAX_AGE_CGM_BATTERY = MAX_AGE_PUMP_BATTERY