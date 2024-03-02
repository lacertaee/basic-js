const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let em = email.split('@');
  if (em[1][0] !== '.') {
    return em[em.length-1];
  } else {
    return em[em.length-1].slice(0);
  }
}

module.exports = {
  getEmailDomain
};
