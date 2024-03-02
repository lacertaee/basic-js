const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = '';
  if (!('additionRepeatTimes' in options) && 'addition' in options) {
    options['additionRepeatTimes'] = 1;
  }
  if (!('repeatTimes' in options)) {
    newStr += (str + String(options.addition));
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    newStr += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      if (j === options.additionRepeatTimes - 1) {
       newStr += String(options.addition);
      } else {
        if ('additionSeparator' in options) {
          newStr += (String(options.addition) + String(options.additionSeparator));
        } else {
          newStr += (String(options.addition) + '|');
        }
      }
    }
    if ('separator' in options) {
      i === options.repeatTimes - 1 ? '' : newStr += String(options.separator);
    } else {
      i === options.repeatTimes - 1 ? '' : newStr += '+';
    }
  }
  return newStr;
}

module.exports = {
  repeater
};
