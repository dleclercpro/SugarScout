import { createSelector } from 'reselect';
import * as DataTypes from 'constants/DataTypes';
import { WINDOW, H_TO_MS, M_TO_MS, MAX_AGE_SENSOR, MAX_AGE_BGS_TREND, REFRESH_BG_RATE } from 'constants/Time';
import * as BG from 'constants/BG';
import * as Basal from 'constants/Basal';
import { getTrendArrow } from 'components/BG';
import { getArrayLast, getArrayMin, getArrayMax, getArrayAverage, getUniqueValues, roundTo } from 'lib';


// Time
const getCurrentTime = (state) => state.time.now;


// Data
const getBGs = (state) => state.data.bgs.data.bgs;
const getBasals = (state) => state.data.pump.data.basals;
const getNetBasals = (state) => state.data.treatments.data.netBasals;
const getBoluses = (state) => state.data.treatments.data.boluses;
const getIOBs = (state) => state.data.treatments.data.iobs;
const getCOBs = (state) => state.data.treatments.data.cobs;
const getISFs = (state) => state.data.pump.data.isfs;
const getCSFs = (state) => state.data.pump.data.csfs;
const getReservoirLevels = (state) => state.data.history.data.pump.reservoir;
const getPumpBatteryLevels = (state) => state.data.history.data.pump.battery;
const getCGMBatteryLevels = (state) => state.data.history.data.cgm.battery;
const getCGMStatuses = (state) => state.data.history.data.cgm.statuses;


// Helpers
const getVisibleItems = (now, items, window = WINDOW) => {
    return items.filter(item => item.getTime() >= now.getTime() - window);
};

const getCurrentTimeBracket = (now, brackets) => {
    return brackets
        .filter(bracket => bracket.getTime() <= now.getTime())
        .reduce((prevBracket, bracket) => prevBracket.getTime() > bracket.getTime() ? prevBracket : bracket, brackets[0]);
};


// Visible items
export const getVisibleBGs = createSelector([getCurrentTime, getBGs], getVisibleItems);
export const getVisibleNetBasals = createSelector([getCurrentTime, getNetBasals], getVisibleItems);
export const getVisibleBoluses = createSelector([getCurrentTime, getBoluses], getVisibleItems);
export const getVisibleIOBs = createSelector([getCurrentTime, getIOBs], getVisibleItems);


// Current time bracket
export const getCurrentBasal = createSelector([getCurrentTime, getBasals], getCurrentTimeBracket);
export const getCurrentISF = createSelector([getCurrentTime, getISFs], getCurrentTimeBracket);
export const getCurrentCSF = createSelector([getCurrentTime, getCSFs], getCurrentTimeBracket);


// Last items
export const getCurrentBG = createSelector([getBGs], getArrayLast);
export const getCurrentIOB = createSelector([getIOBs], getArrayLast);
export const getCurrentCOB = createSelector([getCOBs], getArrayLast);
export const getCurrentReservoirLevel = createSelector([getReservoirLevels], getArrayLast);
export const getCurrentPumpBatteryLevel = createSelector([getPumpBatteryLevels], getArrayLast);
export const getCurrentCGMBatteryLevel = createSelector([getCGMBatteryLevels], getArrayLast);


// Misc
export const getAxisTicks = (values, defaults) => {

    if (values.length) {
        const min = Math.floor(getArrayMin(values, x => x.getValue()).getValue());
        const max = Math.ceil(getArrayMax(values, x => x.getValue()).getValue());

        return getUniqueValues([
            Math.min(min, getArrayMin(defaults)),
            ...defaults,
            Math.max(max, getArrayMax(defaults))
        ]);
    }

    return defaults;
};

export const getBGAxisTicks = createSelector(
    [getVisibleBGs],
    bgs => getAxisTicks(bgs, BG.AXIS_VALUES)
);

export const getBasalAxisTicks = createSelector(
    [getVisibleNetBasals, getVisibleIOBs],
    (nbs, iobs) => getAxisTicks([...nbs, ...iobs], Basal.AXIS_VALUES)
);

export const getCurrentSAGE = createSelector(
    [getCurrentTime, getCGMStatuses],
    (now, statuses) => {
        if (statuses) {
            const lastStart = getArrayLast(statuses.filter(status => status.getValue() === 'Started'));
            const lastEnd = getArrayLast(statuses.filter(status =>
                status.getValue() === 'Stopped' ||
                status.getValue() === 'Expired'
            ));

            if (lastStart && lastEnd) {
                const age = now.getTime() - lastStart.getTime();
                const hasBeenRestarted = lastStart.getTime() > lastEnd.getTime();
                const hasExpired = age > MAX_AGE_SENSOR;

                if (hasBeenRestarted && !hasExpired) {
                    return new DataTypes.TimeData(age / H_TO_MS, lastStart.getTime());
                }
            }
        }
    }
);

export const getCurrentCAGE = (state) => undefined;

export const getCurrentBGDelta = createSelector(
    [getVisibleBGs, getCurrentTime],
    (bgs, now) => {
        bgs = bgs.filter(bg => bg.getTime() >= now.getTime() - MAX_AGE_BGS_TREND);
        const nBGs = bgs.length;
        const dt = nBGs > 1 ? bgs[nBGs - 1].getTime() - bgs[nBGs - 2].getTime() : -1;

        if (dt === REFRESH_BG_RATE) {
            return new DataTypes.TimeData(bgs[nBGs - 1].getValue() - bgs[nBGs - 2].getValue());
        }
    }
);

export const getCurrentBGTrendArrow = createSelector(
    [getVisibleBGs, getCurrentTime],
    (bgs, now) => {
        bgs = bgs.filter(bg => bg.getTime() >= now.getTime() - MAX_AGE_BGS_TREND);
        const nBGs = bgs.length;

        if (nBGs >= BG.N_BGS_TREND) {
            let dBGdts = [];

            for (let i = nBGs - BG.N_BGS_TREND; i < nBGs - 1; i++) {
                const dBG = bgs[i + 1].getValue() - bgs[i].getValue();
                const dt = (bgs[i + 1].getTime() - bgs[i].getTime()) / M_TO_MS; // (m)
            
                dBGdts.push(dBG / dt);
            }
        
            const avgdBGdt = roundTo(getArrayAverage(dBGdts), 2);

            return new DataTypes.TimeData(getTrendArrow(avgdBGdt));
        }
    }
);