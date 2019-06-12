import moment from 'moment'
import * as Time from 'constants/Time'
import * as BG from 'constants/BG'
import * as DataTypes from 'constants/DataTypes'
import * as ActionTypes from 'constants/ActionTypes'
import * as lib from 'lib'

export const INIT_DATA_STATE = {
    isFetching: false,
    error: '',
    data: [],
}

const INIT_CGM_STATE = {
    company: 'Dexcom',
    model: 'G4',
    firmware: '',
    units: BG.UNITS,
    data: {
        [DataTypes.DATA_BGS]: { ...INIT_DATA_STATE },
    },
}

export const getBGsFromJSON = (json) => {
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

const CGMReducer = (state = INIT_CGM_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_BG_DATA_REQUEST:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_BGS]: {
                        isFetching: true,
                        error: '',
                        data: [],
                    },
                }
            }

        case ActionTypes.FETCH_BG_DATA_FAILURE:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_BGS]: {
                        isFetching: false,
                        error: action.error,
                        data: [],
                    },
                }
            }

        case ActionTypes.FETCH_BG_DATA_SUCCESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    [DataTypes.DATA_BGS]: {
                        isFetching: false,
                        error: '',
                        data: getBGsFromJSON(action.data),
                    },
                }
            }

        default:
            return state
    }
}

export default CGMReducer