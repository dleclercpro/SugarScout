import { UPDATE_INNER_BG_SIZE, UPDATE_INNER_BASAL_SIZE } from 'constants/ActionTypes';

export const updateInnerBGSize = (width, height) => ({
    type: UPDATE_INNER_BG_SIZE,
    width,
    height,
});

export const updateInnerBasalSize = (width, height) => ({
    type: UPDATE_INNER_BASAL_SIZE,
    width,
    height,
});