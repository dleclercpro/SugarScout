import moment from 'moment'
import * as Time from 'constants/Time'
import * as ActionTypes from 'constants/ActionTypes'
import * as lib from 'lib'

const getTimedDataFromJSON = (json, format, callback = data => data) => {
    return callback(Object.keys(json).reduce((data, t) => ([
        ...data,
        {
            time: moment(t, format).valueOf(),
            value: json[t],
        }
    ]), [])
    .sort(lib.compareEpochTimeData))
}

const addDurationsToTimedData = (data) => {
    return data.map((element, i) => ({
        ...element,
        duration: i + 1 === data.length ? 0 : data[i + 1].time - element.time,
    }))
}

const getBGsFromJSON = (json) => getTimedDataFromJSON(
    json,
    Time.FORMAT_LONG
)

const getBasalsFromJSON = (json, profile = 'Standard') => getTimedDataFromJSON(
    json['Basal Profile (' + profile + ')'],
    Time.FORMAT_SHORT
)

const getNetBasalsFromJSON = (json) => getTimedDataFromJSON(
    json['Net Basals'],
    Time.FORMAT_LONG,
    addDurationsToTimedData
)

const getBolusesFromJSON = (json) => getTimedDataFromJSON(
    json['Boluses'],
    Time.FORMAT_LONG
)

const getIOBsFromJSON = (json) => getTimedDataFromJSON(
    json['IOB'],
    Time.FORMAT_LONG
)

const getISFsFromJSON = (json) => getTimedDataFromJSON(
    json['ISF'],
    Time.FORMAT_SHORT
)

const getCSFsFromJSON = (json) => getTimedDataFromJSON(
    json['CSF'],
    Time.FORMAT_SHORT
)

const getBGTargetsFromJSON = (json) => getTimedDataFromJSON(
    json['BG Targets'],
    Time.FORMAT_SHORT
)

const getPumpReservoirLevelsFromJSON = (json) => getTimedDataFromJSON(
    json['Pump']['Reservoir Levels'],
    Time.FORMAT_LONG
)

const getPumpBatteryLevelsFromJSON = (json) => getTimedDataFromJSON(
    json['Pump']['Battery Levels'],
    Time.FORMAT_LONG
)

const getCGMBatteryLevelsFromJSON = (json) => getTimedDataFromJSON(
    json['CGM']['Battery Levels'],
    Time.FORMAT_LONG
)

const INIT_DATA_SUBSTATE = {
    isFetching: false,
    error: '',
    data: {},
}

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
    cgm: {
        ...INIT_DATA_SUBSTATE,
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
            iobs: [],
            boluses: [],
            netBasals: [],
        },
    },
    history: {
        ...INIT_DATA_SUBSTATE,
        data: {
            pump: {
                reservoir: [],
                battery: [],
            },
            cgm: {
                battery: [],
            },
        },
    },
}

const DataReducer = (state = INIT_DATA_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BG_DATA_REQUEST:
        case ActionTypes.FETCH_PUMP_DATA_REQUEST:
        case ActionTypes.FETCH_TREATMENT_DATA_REQUEST:
        case ActionTypes.FETCH_HISTORY_DATA_REQUEST:
            return {
                ...state,
                [action.dataType]: {
                    ...state[action.dataType],
                    isFetching: true,
                    error: '',
                },
            }

        case ActionTypes.FETCH_BG_DATA_FAILURE:
        case ActionTypes.FETCH_PUMP_DATA_FAILURE:
        case ActionTypes.FETCH_TREATMENT_DATA_FAILURE:
        case ActionTypes.FETCH_HISTORY_DATA_FAILURE:
            return {
                ...state,
                [action.dataType]: {
                    ...state[action.dataType],
                    isFetching: false,
                    error: action.error,
                },
            }

        case ActionTypes.FETCH_BG_DATA_SUCCESS:
            return {
                ...state,
                bgs: {
                    isFetching: false,
                    error: '',
                    data: {
                        bgs: getBGsFromJSON(action.data),
                    },
                },
            }

        case ActionTypes.FETCH_PUMP_DATA_SUCCESS:
            return {
                ...state,
                pump: {
                    isFetching: false,
                    error: '',
                    data: {
                        basals: getBasalsFromJSON(action.data),
                        bgTargets: getBGTargetsFromJSON(action.data),
                        isfs: getISFsFromJSON(action.data),
                        csfs: getCSFsFromJSON(action.data),
                    },
                }
            }

        case ActionTypes.FETCH_TREATMENT_DATA_SUCCESS:
            return {
                ...state,
                treatments: {
                    isFetching: false,
                    error: '',
                    data: {
                        iobs: getIOBsFromJSON(action.data),
                        boluses: getBolusesFromJSON(action.data),
                        netBasals: getNetBasalsFromJSON(action.data),
                    },
                },
            }

        case ActionTypes.FETCH_HISTORY_DATA_SUCCESS:
            return {
                ...state,
                history: {
                    isFetching: false,
                    error: '',
                    data: {
                        pump: {
                            reservoir: getPumpReservoirLevelsFromJSON(action.data),
                            battery: getPumpBatteryLevelsFromJSON(action.data),
                        },
                        cgm: {
                            battery: getCGMBatteryLevelsFromJSON(action.data),
                        },
                    },
                },
            }

        default:
            return state
    }
}

export default DataReducer