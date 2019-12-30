import moment from 'moment';
import * as Time from 'constants/Time';
import { TimeData } from 'constants/DataTypes';
import {
    FETCH_DATA_BG_PENDING, FETCH_DATA_BG_FULFILLED, FETCH_DATA_BG_REJECTED,
    FETCH_DATA_PUMP_PENDING, FETCH_DATA_PUMP_FULFILLED, FETCH_DATA_PUMP_REJECTED,
    FETCH_DATA_TREATMENT_PENDING, FETCH_DATA_TREATMENT_FULFILLED, FETCH_DATA_TREATMENT_REJECTED,
    FETCH_DATA_HISTORY_PENDING, FETCH_DATA_HISTORY_FULFILLED, FETCH_DATA_HISTORY_REJECTED,
} from 'constants/ActionTypes';
import { compareTimeData } from 'lib';

const INIT_DATA_STATE = {
    pump: {
        isFetching: false,
        error: '',
        data: {
            basals: [],
            bgTargets: [],
            isfs: [],
            csfs: [],
        },
    },
    bgs: {
        isFetching: false,
        error: '',
        data: {
            bgs: [],
        },
    },
    treatments: {
        isFetching: false,
        error: '',
        data: {
            boluses: [],
            netBasals: [],
            iobs: [],
            cobs: [],
        },
    },
    history: {
        isFetching: false,
        error: '',
        data: {
            pump: {
                battery: [],
                reservoir: [],
            },
            cgm: {
                battery: [],
                statuses: [],
            },
        },
    },
};

const DataReducer = (state = INIT_DATA_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA_BG_PENDING:
        case FETCH_DATA_PUMP_PENDING:
        case FETCH_DATA_TREATMENT_PENDING:
        case FETCH_DATA_HISTORY_PENDING:
            return {
                ...state,
                [action.meta.type]: {
                    ...state[action.meta.type],
                    isFetching: true,
                    error: '',
                },
            };

        case FETCH_DATA_BG_REJECTED:
        case FETCH_DATA_PUMP_REJECTED:
        case FETCH_DATA_TREATMENT_REJECTED:
        case FETCH_DATA_HISTORY_REJECTED:
            return {
                ...state,
                [action.meta.type]: {
                    ...state[action.meta.type],
                    isFetching: false,
                    error: action.payload,
                },
            };

        case FETCH_DATA_BG_FULFILLED:
            return {
                ...state,
                bgs: {
                    isFetching: false,
                    error: '',
                    data: {
                        bgs: getBGs(action.payload),
                    },
                },
            };

        case FETCH_DATA_PUMP_FULFILLED:
            return {
                ...state,
                pump: {
                    isFetching: false,
                    error: '',
                    data: {
                        basals: getBasals(action.payload),
                        bgTargets: getBGTargets(action.payload),
                        isfs: getISFs(action.payload),
                        csfs: getCSFs(action.payload),
                    },
                }
            };

        case FETCH_DATA_TREATMENT_FULFILLED:
            return {
                ...state,
                treatments: {
                    isFetching: false,
                    error: '',
                    data: {
                        boluses: getBoluses(action.payload),
                        netBasals: getNetBasals(action.payload),
                        iobs: getIOBs(action.payload),
                        cobs: [],
                    },
                },
            };

        case FETCH_DATA_HISTORY_FULFILLED:
            return {
                ...state,
                history: {
                    isFetching: false,
                    error: '',
                    data: {
                        pump: {
                            battery: getPumpBatteryLevels(action.payload),
                            reservoir: getPumpReservoirLevels(action.payload),
                        },
                        cgm: {
                            battery: getCGMBatteryLevels(action.payload),
                            statuses: getCGMStatuses(action.payload),
                        },
                    },
                },
            };

        default:
            return state;
    }
};

const getTimeData = (json, format = Time.FORMAT_LONG) => {
    return Object.keys(json).reduce((data, t) => ([
        ...data,
        new TimeData(json[t], moment(t, format).valueOf())
    ]), []).sort(compareTimeData);
};

const addDurationsToTimeData = (values) => {
    values.forEach((value, i) => {
        const isLast = i + 1 === values.length;
        value.duration = isLast ? 0 : values[i + 1].time - value.time;
    });
    
    return values;
};

const getBGs = (json) => {
    return getTimeData(json);
};

const getBasals = (json, profile = 'Standard') => {
    return getTimeData(json['Basal Profile (' + profile + ')'], Time.FORMAT_SHORT);
};

const getNetBasals = (json) => {
    return addDurationsToTimeData(getTimeData(json['Net Basals']));
};

const getBoluses = (json) => {
    return getTimeData(json['Boluses']);
};

const getIOBs = (json) => {
    return getTimeData(json['IOB']);
};

const getISFs = (json) => {
    return getTimeData(json['ISF'], Time.FORMAT_SHORT);
};

const getCSFs = (json) => {
    return getTimeData(json['CSF'], Time.FORMAT_SHORT);
};

const getBGTargets = (json) => {
    return getTimeData(json['BG Targets'], Time.FORMAT_SHORT);
};

const getPumpReservoirLevels = (json) => {
    return getTimeData(json['Pump']['Reservoir Levels']);
};

const getPumpBatteryLevels = (json) => {
    return getTimeData(json['Pump']['Battery Levels']);
};

const getCGMBatteryLevels = (json) => {
    return getTimeData(json['CGM']['Battery Levels']);
};

const getCGMStatuses = (json) => {
    return getTimeData(json['CGM']['Sensor Statuses']);
};

export default DataReducer;