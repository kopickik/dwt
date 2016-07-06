'use strict';

var add = require('./math').add;

function increment(val) {
  return add(val, 1);
}

module.exports = {
  increment: increment
}
