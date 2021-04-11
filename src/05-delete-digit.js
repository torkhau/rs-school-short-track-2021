/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n / 10 < 1) {
    return n;
  }
  const arrNumbers = n.toString().split('');
  return Math.max(...arrNumbers.map((_, i) => parseInt((arrNumbers.reduce((str, el, redI) => (str
    + (i === redI ? '' : el)), '')), 10)));
}

module.exports = deleteDigit;
