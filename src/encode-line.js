const { NotImplementedError } = require('../extensions/index.js');

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
  let newStr = '';
  let counter = 1;
  for (let i = 0; i < str.length; i=0) {
    let temp = str[i];
    for (let j = i+1; j < str.length; j++) {
      if (temp === str[j]) {
        counter++;
      }
    }
    if (counter !== 1) {
        newStr += `${counter}${temp}`;
    } else {
        newStr += `${temp}`;
    }
    counter = 1;
    str = str.replaceAll(temp, '');
  }
  return newStr;
}

module.exports = {
  encodeLine
};
