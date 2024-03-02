const { s } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  items: [],
  count: 0,

  getLength() {
    return this.count;
  },
  addLink(value) {
    value = String(value);
    if (this.count === 0) {
      this.items.push(`( ${value} )`);
    } else {
      this.items.push(`~~( ${value} )`);
    }
    this.count++;
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.items.length || typeof position !== 'number') {
      throw new Error('You can\'t remove incorrect link!');
    }
    if (position === 1) {
      this.items.splice(position-1, 1);
      this.items[0] = this.items[0].replaceAll('~~', '');
    } else {
      this.items.splice(position-1, 1);
    }
    this.count--;
    return this
  },
  reverseChain() {
    for (let i = 1; i < this.count; i++) {
        let item = this.items[i];
        item = item.replaceAll('~~', '');
        item = item + '~~';
        this.items[i] = item;
    }
    this.items.reverse();
    if (this.items[this.items.length - 1] !== undefined) {
      if (this.items[this.items.length - 1].includes('~~')) {
        this.items[this.items.length - 1] = this.items[this.items.length-1].replaceAll('~', '');
      }
    }
    return this
  },
  finishChain() {
    const a = this.items.join('');
    this.count = 0;
    this.items = [];
    return a
  }
};

module.exports = {
  chainMaker
};
