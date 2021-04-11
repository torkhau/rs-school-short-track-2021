/* eslint-disable no-loop-func */
/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  if (array.length === 1) return 0;
  if (array.length === 2) return (array[0] === value ? 0 : 1);
  let i = Math.floor((array.length - 1) / 2);
  while (!(array[i] === value)) {
    if (array[i] < value) {
      i = Math.floor((array.length - i) / 2) + i;
    } else {
      i = Math.floor((i - 1) / 2);
    }
  }
  return i;
}

module.exports = findIndex;
