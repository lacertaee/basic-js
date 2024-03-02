const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let n = [];
  const sequences = ['--double-next', '--double-prev', '--discard-prev', '--discard-next'];
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  arr.forEach(element => {
    if (element === '--double-next') {
      n.push(arr[arr.indexOf(element) + 1]);
      arr = arr.slice(element);
    } else if (element === '--double-prev') {
      n.push(arr[arr.indexOf(element) - 1]);
    }
    if (element === '--discard-prev') {
      n.splice(n.indexOf(arr[arr.indexOf('--discard-prev') - 1]), 1);
    }
    if (arr[arr.indexOf(element) - 1] !== '--discard-next') {
      n.push(element);
    } else {
      arr.splice(arr.indexOf(element), 1);
    }
  })
  n = n.filter((element) => !sequences.includes(element) && element !== undefined);
  return n;
}

module.exports = {
  transform
};
