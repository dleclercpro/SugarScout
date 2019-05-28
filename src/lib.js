export const getRange = (x) => [...Array(x).keys()]

export const getRangeFromTo = (start, end) => getRange(end - start + 1).map((x) => x + start)