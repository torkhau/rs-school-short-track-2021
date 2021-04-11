/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str = s2;
  return s1.split('').reduce((summ, el) => {
    const indx = str.indexOf(el);
    if (indx >= 0) {
      str = str.slice(0, indx) + str.slice(indx + 1);
      return summ + 1;
    }
    return summ;
  }, 0);
}

module.exports = getCommonCharacterCount;
