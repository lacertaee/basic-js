const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor () {
    this.count = 0;
    this.done = false; 
  }
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      this.count++;
    }
    while (!this.done) {
      if (arr.some(x => Array.isArray(x))) {
        arr = arr.flat();
        this.count++;
      } else {
        this.done = true;
      }
    }
    const a = this.count;
    this.count = 0;
    this.done = false;
    return a;
  }
}

module.exports = {
  DepthCalculator
};
