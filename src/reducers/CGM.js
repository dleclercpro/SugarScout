import * as bg from '../constants/BG'
import * as actions from '../constants/ActionTypes'

const INIT_STATE_DATA = {
    isFetching: false,
    isError: false,
    data: [],
}

const INIT_STATE = {
    company: 'Dexcom',
    model: 'G4',
    firmware: '',
    units: bg.UNIT,
    data: {
        bgs: INIT_STATE_DATA,
        calibrations: INIT_STATE_DATA,
    },
}

const fetchData = (state = INIT_STATE_DATA, action) => {
    switch (action.type) {
        case actions.FETCH_DATA_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
            }

        case actions.FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
            }

        case actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isError: false,
                data: action.data,
            }

        default:
            return state
    }
}

const CGM = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_DATA_REQUEST:
        case actions.FETCH_DATA_FAILURE:
        case actions.FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                data: Object.assign({}, state.data, {
                    [action.dataType]: fetchData(state.data[action.dataType], action),
                })
            })

        default:
            return state
    }
}

export default CGM