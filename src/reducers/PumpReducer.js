import moment from 'moment'
import * as Time from 'constants/Time'
import * as DataTypes from 'constants/DataTypes'
import * as ActionTypes from 'constants/ActionTypes'
import * as lib from 'lib'

export const INIT_DATA_STATE = {
    isFetching: false,
    error: '',
    data: [],
}

const INIT_PUMP_STATE = {
    company: 'Medtronic',
    model: 'MiniMed Paradigm 722',
    firmware: '2.4A 1.1',
    data: {
        [DataTypes.DATA_BOLUSES]: { ...INIT_DATA_STATE },
        [DataTypes.DATA_BASALS]: { ...INIT_DATA_STATE },
        [DataTypes.DATA_NET_BASALS]: { ...INIT_DATA_STATE },
    },
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

const PumpReducer = (state = INIT_PUMP_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PUMP_DATA_REQUEST:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_BASALS]: {
                        isFetching: true,
                        error: '',
                        data: [],
                    },
                }
            }

        case ActionTypes.FETCH_PUMP_DATA_FAILURE:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_BASALS]: {
                        isFetching: false,
                        error: action.error,
                        data: [],
                    },
                }
            }

        case ActionTypes.FETCH_PUMP_DATA_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_BASALS]: {
                        isFetching: false,
                        error: '',
                        data: getBasalsFromJSON(action.data),
                    },
                }
            }

        case ActionTypes.FETCH_TREATMENT_DATA_REQUEST:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_NET_BASALS]: {
                        isFetching: true,
                        error: '',
                        data: [],
                    },
                }
            }

        case ActionTypes.FETCH_TREATMENT_DATA_FAILURE:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_NET_BASALS]: {
                        isFetching: false,
                        error: action.error,
                        data: [],
                    },
                }
            }

        case ActionTypes.FETCH_TREATMENT_DATA_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_NET_BASALS]: {
                        isFetching: false,
                        error: '',
                        data: getNetBasalsFromJSON(action.data),
                    },
                }
            }

        default:
            return state
    }
}

export default PumpReducer