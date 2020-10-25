const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (!this.chain[position - 1]) {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    const finishedChain = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return finishedChain;
  }
};

module.exports = chainMaker;
