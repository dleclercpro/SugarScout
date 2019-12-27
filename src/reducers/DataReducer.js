import moment from 'moment';
import * as Time from 'constants/Time';
import * as DataTypes from 'constants/DataTypes';
import {
    FETCH_DATA_BG_PENDING, FETCH_DATA_BG_FULFILLED, FETCH_DATA_BG_REJECTED,
    FETCH_DATA_PUMP_PENDING, FETCH_DATA_PUMP_FULFILLED, FETCH_DATA_PUMP_REJECTED,
    FETCH_DATA_TREATMENT_PENDING, FETCH_DATA_TREATMENT_FULFILLED, FETCH_DATA_TREATMENT_REJECTED,
    FETCH_DATA_HISTORY_PENDING, FETCH_DATA_HISTORY_FULFILLED, FETCH_DATA_HISTORY_REJECTED,
} from 'constants/ActionTypes';
import { compareTimeData } from 'lib';

const getTimeDataFromJSON = (json, format, callback = x => x) => {
    const timeData = Object.keys(json).reduce((data, t) => ([
        ...data,
        new DataTypes.TimeData(json[t], moment(t, format).valueOf())
    ]), [])
    .sort(compareTimeData);

    return callback(timeData);
};

const addDurationsToTimeData = (values) => {
    values.forEach((value, i) => {
        const isLast = i + 1 === values.length;

        if (isLast) {
            value.setDuration(0);
        } else {
            value.setDuration(values[i + 1].getTime() - value.getTime());
        }
    });
    
    return values;
};

const getBGsFromJSON = (json) => getTimeDataFromJSON(
    json,
    Time.FORMAT_LONG
);

const getBasalsFromJSON = (json, profile = 'Standard') => getTimeDataFromJSON(
    json['Basal Profile (' + profile + ')'],
    Time.FORMAT_SHORT
);

const getNetBasalsFromJSON = (json) => getTimeDataFromJSON(
    json['Net Basals'],
    Time.FORMAT_LONG,
    addDurationsToTimeData
);

const getBolusesFromJSON = (json) => getTimeDataFromJSON(
    json['Boluses'],
    Time.FORMAT_LONG
);

const getIOBsFromJSON = (json) => getTimeDataFromJSON(
    json['IOB'],
    Time.FORMAT_LONG
);

const getISFsFromJSON = (json) => getTimeDataFromJSON(
    json['ISF'],
    Time.FORMAT_SHORT
);

const getCSFsFromJSON = (json) => getTimeDataFromJSON(
    json['CSF'],
    Time.FORMAT_SHORT
);

const getBGTargetsFromJSON = (json) => getTimeDataFromJSON(
    json['BG Targets'],
    Time.FORMAT_SHORT
);

const getPumpReservoirLevelsFromJSON = (json) => getTimeDataFromJSON(
    json['Pump']['Reservoir Levels'],
    Time.FORMAT_LONG
);

const getPumpBatteryLevelsFromJSON = (json) => getTimeDataFromJSON(
    json['Pump']['Battery Levels'],
    Time.FORMAT_LONG
);

const getCGMBatteryLevelsFromJSON = (json) => getTimeDataFromJSON(
    json['CGM']['Battery Levels'],
    Time.FORMAT_LONG
);

const getCGMStatusesFromJSON = (json) => getTimeDataFromJSON(
    json['CGM']['Sensor Statuses'],
    Time.FORMAT_LONG
);

const INIT_DATA_SUBSTATE = {
    isFetching: false,
    error: '',
    data: {},
};

const INIT_DATA_STATE = {
    pump: {
        ...INIT_DATA_SUBSTATE,
        data: {
            basals: [],
            bgTargets: [],
            isfs: [],
            csfs: [],
        },
    },
    bgs: {
        ...INIT_DATA_SUBSTATE,
        data: {
            bgs: [],
        },
    },
    treatments: {
        ...INIT_DATA_SUBSTATE,
        data: {
            boluses: [],
            netBasals: [],
            iobs: [],
            cobs: [],
        },
    },
    history: {
        ...INIT_DATA_SUBSTATE,
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
                        bgs: getBGsFromJSON(action.payload),
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
                        basals: getBasalsFromJSON(action.payload),
                        bgTargets: getBGTargetsFromJSON(action.payload),
                        isfs: getISFsFromJSON(action.payload),
                        csfs: getCSFsFromJSON(action.payload),
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
                        boluses: getBolusesFromJSON(action.payload),
                        netBasals: getNetBasalsFromJSON(action.payload),
                        iobs: getIOBsFromJSON(action.payload),
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
                            battery: getPumpBatteryLevelsFromJSON(action.payload),
                            reservoir: getPumpReservoirLevelsFromJSON(action.payload),
                        },
                        cgm: {
                            battery: getCGMBatteryLevelsFromJSON(action.payload),
                            statuses: getCGMStatusesFromJSON(action.payload),
                        },
                    },
                },
            };

        default:
            return state;
    }
};

export default DataReducer;