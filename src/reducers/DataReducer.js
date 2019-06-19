import moment from 'moment'
import * as Time from 'constants/Time'
import * as DataTypes from 'constants/DataTypes'
import * as ActionTypes from 'constants/ActionTypes'
import * as lib from 'lib'

const getTimeDataFromJSON = (json, format, callback = x => x) => {
    const timeData = Object.keys(json).reduce((data, t) => ([
        ...data,
        new DataTypes.TimeData( json[t], moment(t, format).valueOf() )
    ]), [])
    .sort(lib.compareTimeData)

    return callback(timeData)
}

const addDurationsToTimeData = (values) => {
    values.forEach((value, i) => {
        value.setDuration(i + 1 === values.length ? 0 : values[i + 1].getTime() - value.getTime())
    })
    
    return values
}

const getBGsFromJSON = (json) => getTimeDataFromJSON(
    json,
    Time.FORMAT_LONG
)

const getBasalsFromJSON = (json, profile = 'Standard') => getTimeDataFromJSON(
    json['Basal Profile (' + profile + ')'],
    Time.FORMAT_SHORT
)

const getNetBasalsFromJSON = (json) => getTimeDataFromJSON(
    json['Net Basals'],
    Time.FORMAT_LONG,
    addDurationsToTimeData
)

const getBolusesFromJSON = (json) => getTimeDataFromJSON(
    json['Boluses'],
    Time.FORMAT_LONG
)

const getIOBsFromJSON = (json) => getTimeDataFromJSON(
    json['IOB'],
    Time.FORMAT_LONG
)

const getISFsFromJSON = (json) => getTimeDataFromJSON(
    json['ISF'],
    Time.FORMAT_SHORT
)

const getCSFsFromJSON = (json) => getTimeDataFromJSON(
    json['CSF'],
    Time.FORMAT_SHORT
)

const getBGTargetsFromJSON = (json) => getTimeDataFromJSON(
    json['BG Targets'],
    Time.FORMAT_SHORT
)

const getPumpReservoirLevelsFromJSON = (json) => getTimeDataFromJSON(
    json['Pump']['Reservoir Levels'],
    Time.FORMAT_LONG
)

const getPumpBatteryLevelsFromJSON = (json) => getTimeDataFromJSON(
    json['Pump']['Battery Levels'],
    Time.FORMAT_LONG
)

const getCGMBatteryLevelsFromJSON = (json) => getTimeDataFromJSON(
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
                        boluses: getBolusesFromJSON(action.data),
                        netBasals: getNetBasalsFromJSON(action.data),
                        iobs: getIOBsFromJSON(action.data),
                        cobs: [],
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