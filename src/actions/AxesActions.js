import { UPDATE_TIME_AXIS, UPDATE_BG_AXIS, UPDATE_BASAL_AXIS } from 'constants/ActionTypes';

export const updateTimeAxis = (args) => ({
    type: UPDATE_TIME_AXIS,
    args,
});

export const updateBGAxis = (args) => ({
    type: UPDATE_BG_AXIS,
    args,
});

export const updateBasalAxis = (args) => ({
    type: UPDATE_BASAL_AXIS,
    args,
});