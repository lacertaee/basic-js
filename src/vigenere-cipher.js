const { s } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (reverse=false) {
    this.alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.reverse = reverse;
  }

  beggining(message, key) {
    if (message === null || message === undefined || key === null || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toLowerCase();
    key = key.toLowerCase();
    let k = message;
    let newKey = '';
    let ind = 0;
    for (let i = 0; i < k.length; i++) {
      if (!this.alph.includes(k[i])) {
        newKey += k[i];
      } else {
        newKey += key[ind];
        ind++;
        if (ind === key.length) {
          ind = 0;
        }
      }
    }
    return newKey;
  }

  encrypt(message, key) {
    let newKey = this.beggining(message, key);
    message = message.toLowerCase();
    key = key.toLowerCase();
    let answ = '';
    for (let i = 0; i < message.length; i++) {
      if (!this.alph.includes(message[i])) {
        answ += message[i]
      } else {
        let mesInAlph = this.alph.indexOf(message[i]);
        let keyInAlph = this.alph.indexOf(newKey[i]);
        let pos = 0;
        if ((mesInAlph + keyInAlph) >= this.alph.length) {
          pos = (mesInAlph+keyInAlph) - 26;
        } else {
          pos = keyInAlph + mesInAlph;
        }
        answ += this.alph[pos];
      }
    }
    if (this.reverse) {
      return answ.toUpperCase().split('').reverse().join('');
    }
    return answ.toUpperCase();
  }
  decrypt(message, key) {
    let newKey = this.beggining(message, key);
    message = message.toLowerCase();
    key = key.toLowerCase();
    let answ = '';
    for (let i = 0; i < message.length; i++) {
      if (!this.alph.includes(message[i])) {
        answ += message[i]
      } else {
        let mesInAlph = this.alph.indexOf(message[i]);
        let keyInAlph = this.alph.indexOf(newKey[i]);
        let pos = 0;
        if ((mesInAlph - keyInAlph) < 0) {
          pos = this.alph.length - keyInAlph + mesInAlph;
        } else {
          pos = mesInAlph - keyInAlph;
        }
        answ += this.alph[pos];
      }
    }
    if (this.reverse) {
      return answ.toUpperCase().split('').reverse().join('');
    }
    return answ.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
