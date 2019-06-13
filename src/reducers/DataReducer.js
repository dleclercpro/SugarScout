import moment from 'moment'
import * as Time from 'constants/Time'
import * as ActionTypes from 'constants/ActionTypes'
import * as lib from 'lib'

const getBGsFromJSON = (json) => {
    const data = json
    
    return Object.keys(data).reduce((BGs, t) => ([
        ...BGs,
        {
            time: moment(t, Time.FORMAT_LONG).valueOf(),
            value: data[t],
        }
    ]), [])
    .sort(lib.compareEpochTimeData)
}

const getBasalsFromJSON = (json, profile = 'Standard') => {
    const data = json['Basal Profile (' + profile + ')']

    return Object.keys(data).reduce((basals, t) => ([
        ...basals,
        {
            time: moment(t, Time.FORMAT_SHORT).valueOf(),
            value: data[t],
        }
    ]), [])
    .sort(lib.compareEpochTimeData)
}

const getNetBasalsFromJSON = (json) => {
    const data = json['Net Basals']

    return Object.keys(data).reduce((netBasals, t) => ([
        ...netBasals,
        {
            time: moment(t, Time.FORMAT_LONG).valueOf(),
            value: data[t],
        }
    ]), [])
    .sort(lib.compareEpochTimeData)
    .map((netBasal, i, netBasals) => ({
        ...netBasal,
        duration: i + 1 === netBasals.length ? 0 : netBasals[i + 1].time - netBasal.time,
    }))
}

const getBolusesFromJSON = (json) => {
    const data = json['Boluses']

    return Object.keys(data).reduce((boluses, t) => ([
        ...boluses,
        {
            time: moment(t, Time.FORMAT_LONG).valueOf(),
            value: data[t],
        }
    ]), [])
    .sort(lib.compareEpochTimeData)
}

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
            pumpReservoirLevels: [],
            pumpBatteryLevels: [],
            cgmBatteryLevels: [],
        },
    },
}

const DataReducer = (state = INIT_DATA_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BG_DATA_REQUEST:
        case ActionTypes.FETCH_PUMP_DATA_REQUEST:
        case ActionTypes.FETCH_TREATMENT_DATA_REQUEST:
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
                        bgTargets: [],
                        isfs: [],
                        csfs: [],
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
                        iobs: [],
                        boluses: getBolusesFromJSON(action.data),
                        netBasals: getNetBasalsFromJSON(action.data),
                    },
                },
            }

        default:
            return state
    }
}

export default DataReducer