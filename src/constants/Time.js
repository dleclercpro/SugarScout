export const NOW = null;

// Unit conversions
export const D_TO_H = 24;
export const H_TO_M = 60;
export const M_TO_S = 60;
export const S_TO_MS = 1000;
export const D_TO_M = D_TO_H * H_TO_M;
export const D_TO_S = D_TO_M * M_TO_S;
export const D_TO_MS = D_TO_S * S_TO_MS;
export const H_TO_S = H_TO_M * M_TO_S;
export const H_TO_MS = H_TO_S * S_TO_MS;
export const M_TO_MS = M_TO_S * S_TO_MS;

// Formats
export const FORMAT_SHORT = 'HH:mm';
export const FORMAT_LONG = 'YYYY.MM.DD - HH:mm:ss';

// Timescales
export const SCALES = [1, 3, 6, 12, 24];               // (h)
export const SCALE = 6;                                // (h)
export const WINDOW = Math.max( ...SCALES ) * H_TO_MS;

// Refresh
export const REFRESH_APP_RATE = 15 * S_TO_MS;
export const REFRESH_DATA_RATE = 1 * M_TO_MS;
export const REFRESH_BG_RATE = 5 * M_TO_MS;

// Axis
export const AXIS_N_TICKS = D_TO_H;

// Max ages
export const MAX_AGE_BG = 15 * M_TO_MS;
export const MAX_AGE_LAST_FETCH = REFRESH_DATA_RATE;
export const MAX_AGE_IOB = 20 * M_TO_MS;
export const MAX_AGE_COB = MAX_AGE_IOB;
export const MAX_AGE_RESERVOIR = 30 * M_TO_MS;
export const MAX_AGE_PUMP_BATTERY = 1 * H_TO_MS;
export const MAX_AGE_CGM_BATTERY = MAX_AGE_PUMP_BATTERY;
export const MAX_AGE_SENSOR = 10 * D_TO_MS;
export const MAX_AGE_BGS_TREND = 30 * M_TO_MS;