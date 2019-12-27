import moment from 'moment';
import * as Time from 'constants/Time';

export const time = (epoch, format = Time.FORMAT_LONG) => {
    return moment(epoch).format(format);
};

export const bg = bg => bg.toFixed(1);
export const dbg = dbg => dbg >= 0 ? '+' + bg(dbg) : bg(dbg);
export const basal = basal => basal.toFixed(2);
export const bolus = bolus => bolus.toFixed(1);
export const isf = isf => isf.toFixed(1);
export const csf = csf => csf.toFixed(0);
export const iob = iob => iob.toFixed(1);
export const cob = cob => cob.toFixed(0);
export const reservoir = reservoir => reservoir.toFixed(1);
export const pumpBattery = battery => battery.toFixed(2);
export const cgmBattery = battery => battery.toFixed(0);
export const ageDays = age => Math.floor(age / 24).toFixed(0);
export const ageHours = age => (age % 24).toFixed(0);