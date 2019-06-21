import * as ActionTypes from 'constants/ActionTypes'

const fetchData = (src, callback = json => json) => {
    return fetch(src, { cache: 'no-store' })
        .then(response => response.json())
        .then(json => callback(json))
}

// Exports
export const fetchDataBG = () => ({
    type: ActionTypes.FETCH_DATA_BG,
    payload: fetchData('reports/BG.json'),
})

export const fetchDataPump = () => ({
    type: ActionTypes.FETCH_DATA_PUMP,
    payload: fetchData('reports/pump.json'),
})

export const fetchDataTreatment = () => ({
    type: ActionTypes.FETCH_DATA_TREATMENT,
    payload: fetchData('reports/treatments.json'),
})

export const fetchDataHistory = () => ({
    type: ActionTypes.FETCH_DATA_HISTORY,
    payload: fetchData('reports/history.json'),
})