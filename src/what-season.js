const { s } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'fall', 'fall', 'fall', 'winter'];
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try {
    return seasons[date.getMonth()];
  } catch (TypeError) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
