import { FETCH_DATA_BG, FETCH_DATA_PUMP, FETCH_DATA_TREATMENT, FETCH_DATA_HISTORY } from 'constants/ActionTypes';

const fetchJSON = (src, headers = { cache: 'no-store' }) => {
    return fetch(src, headers).then(response => response.json());
};

export const fetchBG = () => ({
    type: FETCH_DATA_BG,
    meta: { type: 'bgs' },
    payload: fetchJSON('reports/BG.json'),
});

export const fetchPump = () => ({
    type: FETCH_DATA_PUMP,
    meta: { type: 'pump' },
    payload: fetchJSON('reports/pump.json'),
});

export const fetchTreatment = () => ({
    type: FETCH_DATA_TREATMENT,
    meta: { type: 'treatments' },
    payload: fetchJSON('reports/treatments.json'),
});

export const fetchHistory = () => ({
    type: FETCH_DATA_HISTORY,
    meta: { type: 'history' },
    payload: fetchJSON('reports/history.json'),
});