'use strict';

let runText = require('./lib/hex.js');

let hexConsole = function(x) {
  console.log(`Hex Array: ${x}`);
};

runText('./data/one.txt', './data/two.txt', './data/three.txt', hexConsole);
