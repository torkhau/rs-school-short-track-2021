/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  let index = 0;
  str.split('').forEach((el) => {
    if (arr[index]) {
      if (arr[index][0] === el) {
        arr[index][1] += 1;
      } else {
        arr.push([el, 1]);
        index += 1;
      }
    } else {
      arr.push([el, 1]);
    }
  });
  return arr.reduce((strRes, el) => (strRes + (el[1] > 1 ? el[1] : '') + el[0]), '');
}

module.exports = encodeLine;
