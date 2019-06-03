import * as BG from './BG'
import * as Basal from './Basal'
import * as Time from './Time'

export const INIT_TIME_STATE = {
    now: Time.NOW || new Date(),
    toNow: 0,
    lastTB: Time.NOW.getTime(),
    scales: Time.SCALES,
    scale: Time.SCALE,
}

export const INIT_DATA_STATE = {
    isFetching: false,
    error: '',
    data: [],
}

export const INIT_CGM_STATE = {
    company: 'Dexcom',
    model: 'G4',
    firmware: '',
    units: BG.UNIT,
    data: {
        bgs: Object.assign({}, INIT_DATA_STATE),
    },
}

export const INIT_PUMP_STATE = {
    company: 'Medtronic',
    model: 'MiniMed Paradigm 722',
    firmware: '2.4A 1.1',
    data: {
        basals: Object.assign({}, INIT_DATA_STATE),
        tbs: Object.assign({}, INIT_DATA_STATE),
    },
}

export const INIT_BUBBLE_STATE = {
    status: 'invisible',
    type: '',
    position: {},
    time: '',
    info: {
        value: '',
        units: '',
    },
}

export const INIT_INNER_STATE = {
    bg: {
        width: -1,
        height: -1,
    },
    basal: {
        width: -1,
        height: -1,
    },
}

export const INIT_AXIS_TIME_STATE = {
    units: Time.UNIT,
    nTicks: Time.AXIS_N_TICKS,
    ticks: [],
}

export const INIT_AXIS_BG_STATE = {
    units: BG.UNIT,
    scale: BG.AXIS_SCALE,
    range: [
        BG.AXIS_MIN_MMOL_L,
        BG.AXIS_MAX_MMOL_L
    ],
    ticks: [],
}

export const INIT_AXIS_BASAL_STATE = {
    units: Basal.UNIT,
    scale: Basal.AXIS_SCALE,
    range: [
        Basal.AXIS_MIN_U_H,
        Basal.AXIS_MAX_U_H
    ],
    ticks: [],
}