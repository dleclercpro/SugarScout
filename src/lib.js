export const getRange = (x) => [...Array(x).keys()]

export const getRangeFromTo = (x0, x1) => getRange(x1 - x0 + 1).map((value) => value + x0)