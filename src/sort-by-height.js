const { s } = require('../extensions/index.js');

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
  const indexes = {};
  const os = [];
  const answ = [];
  let len = arr.length;
  if (!(arr.includes(-1))) {
    return arr.sort((a, b) => a - b);
  }
  for (let i = 0; i < len; i++) {
    if (arr[i] === -1) {
      os.push(i);
    } else {
      indexes[i] = arr[i];
    }
  }
  let s = Object.values(indexes);
  s.sort((a, b) => a - b);
  let obj = {};
  Object.keys(indexes).forEach((key, ind) => {
    obj[key] = s[ind];
  })
  for (let i = 0; i < os.length; i++) {
    obj[os[i]] = -1;
  }
  for (let i = 0; i < Object.keys(obj).length; i++) {
    answ[i] = Object.values(obj)[i];
  }
  return answ;
}

module.exports = {
  sortByHeight
};
