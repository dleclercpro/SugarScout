import { FETCH_DATA_BG, FETCH_DATA_PUMP, FETCH_DATA_TREATMENT, FETCH_DATA_HISTORY } from 'constants/ActionTypes';

const fetchData = (src, headers = { cache: 'no-store' }, callback = json => json) => {
    return fetch(src, headers)
        .then(response => response.json())
        .then(json => callback(json))
};

export const fetchDataBG = () => ({
    type: FETCH_DATA_BG,
    meta: { type: 'bgs' },
    payload: fetchData('reports/BG.json'),
});

export const fetchDataPump = () => ({
    type: FETCH_DATA_PUMP,
    meta: { type: 'pump' },
    payload: fetchData('reports/pump.json'),
});

export const fetchDataTreatment = () => ({
    type: FETCH_DATA_TREATMENT,
    meta: { type: 'treatments' },
    payload: fetchData('reports/treatments.json'),
});

export const fetchDataHistory = () => ({
    type: FETCH_DATA_HISTORY,
    meta: { type: 'history' },
    payload: fetchData('reports/history.json'),
});