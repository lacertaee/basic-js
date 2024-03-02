const { s } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const apr = 0.693;
  if (isNaN(Number(sampleActivity)) || typeof sampleActivity !== 'string' || sampleActivity.trim() === '' || sampleActivity < 1 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }
  const up = Math.log(MODERN_ACTIVITY/sampleActivity);
  const down = apr/HALF_LIFE_PERIOD;
  return Math.abs(Math.ceil(up/down));
}

module.exports = {
  dateSample
};
