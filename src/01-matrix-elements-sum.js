/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
const getMatrixElementsSum = (matrix) => matrix.reduce((summ, el, i) => summ
  + el.reduce((elSumm, elEl, elI) => elSumm
  + (matrix[i === 0 ? 0 : i - 1][elI] !== 0 ? elEl : 0), 0), 0);

module.exports = getMatrixElementsSum;
