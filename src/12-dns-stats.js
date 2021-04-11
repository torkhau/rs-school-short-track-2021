/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {};
  const obj = {};
  domains.forEach((el) => {
    const arrDomains = el.split('.').reverse();
    let str = '';
    arrDomains.forEach((arrDomainsEl) => {
      obj[`${str}.${arrDomainsEl}`] = (obj[`${str}.${arrDomainsEl}`] ? obj[`${str}.${arrDomainsEl}`] + 1 : 1);
      str += `.${arrDomainsEl}`;
    });
  });
  return obj;
}

module.exports = getDNSStats;
