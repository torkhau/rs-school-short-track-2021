/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortArr = arr.join().replace(/,-1|-1,|-1/g, '').split(',').sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  let indx = 0;
  return arr.map((el) => {
    if (el === -1) {
      return -1;
    }
    indx += 1;
    return parseInt(sortArr[indx - 1], 10);
  });
}

module.exports = sortByHeight;
