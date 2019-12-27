export const getRange = (x) => {
    return [...Array(x).keys()];
};

export const getRangeFromTo = (start, end) => {
    return getRange(end - start + 1).map((x) => x + start);
};

export const getUniqueValues = (array) => {
    return [...new Set(array)];
};

export const getArrayAverage = (array, callback = x => x) => {
    return array.reduce((a, b) => callback(a) + callback(b), 0) / array.length;
};

export const getArrayMin = (array, callback = x => x) => {
    return array.reduce((a, b) => callback(a) < callback(b) ? a : b, array[0]);
};

export const getArrayMax = (array, callback = x => x) => {
    return array.reduce((a, b) => callback(a) > callback(b) ? a : b, array[0]);
};

export const getArrayRange = (array) => {
    return [getArrayMin(array), getArrayMax(array)];
};

export const getArrayLast = (elements) => {
    if (elements) {
        return elements[elements.length - 1];
    }
};

export const roundTo = (x, n) => Math.round(x * 10 ** n) / 10 ** n;

export const compareTimeData = (a, b) => {
    if (a.getTime() < b.getTime()) { return -1; }
    if (a.getTime() > b.getTime()) { return 1; }
    return 0;
};