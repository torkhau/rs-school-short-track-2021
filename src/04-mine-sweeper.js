/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const parseElem = (matrix, i) => {
  if (matrix) {
    return Number(matrix[i]) ? Number(matrix[i]) : 0;
  }
  return 0;
};

function minesweeper(matrix) {
  return matrix.map((el, i) => (el.map((_, elI) => (parseElem(matrix[i - 1], elI - 1)
  + parseElem(matrix[i - 1], elI)
  + parseElem(matrix[i - 1], elI + 1)
  + parseElem(matrix[i], elI - 1)
  + parseElem(matrix[i], elI + 1)
  + parseElem(matrix[i + 1], elI - 1)
  + parseElem(matrix[i + 1], elI)
  + parseElem(matrix[i + 1], elI + 1)))));
}

module.exports = minesweeper;
