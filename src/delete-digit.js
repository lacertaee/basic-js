const { NotImplementedError } = require('../extensions/index.js');

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
  let str = String(n);
  str = str.split('');
  let arr = [];
  for (let i = 0; i < str.length+1; i++) {
    str = String(n);
    str = str.split('');
    str.splice(i, 1);
    arr.push(str);
  }
  let compare = [];
  arr.forEach(element => {
    compare.push(Number(element.join('')));
  })
  return Math.max(...compare);
}

module.exports = {
  deleteDigit
};
