import * as actions from '../constants/ActionTypes'

const INIT_STATE = {
    company: 'Dexcom',
    model: 'G4',
    firmware: '',
    units: 'mmol/L',
    bg: {
        isFetching: false,
        isError: false,
        data: [],
    },
}

const CGM = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actions.FETCH_BGS_REQUEST:
            return Object.assign({}, state, {bg: {
                isFetching: true,
                isError: false,
            }})

        case actions.FETCH_BGS_FAILURE:
            return Object.assign({}, state, {bg: {
                isFetching: false,
                isError: true,
            }})

        case actions.FETCH_BGS_SUCCESS:
            return Object.assign({}, state, {bg: {
                isFetching: false,
                isError: false,
                data: action.data,
            }})

        default:
            return state
    }
}

export default CGM