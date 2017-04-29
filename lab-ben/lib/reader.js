'use strict';

module.exports = exports = {};

const fs = require('fs');

exports.getSmall = function(callback, callbackTwo, ara) {
  fs.readFile(`${__dirname}/../text/small.txt`, function(err, data) {
    if(err) throw err;
    let hex = data.toString('hex', 0, 8);
    ara.push(hex);
    callback(callbackTwo, ara);
  });
};

exports.getMedium = function(callback, ara) {
  fs.readFile(`${__dirname}/../text/medium.txt`, function(err, data) {
    if(err) throw err;
    let hex = data.toString('hex', 0, 8);
    ara.push(hex);
    callback(ara);
  });
};

exports.getLarge = function(callback, callbackTwo, callbackThree, ara) {
  fs.readFile(`${__dirname}/../text/large.txt`, function(err, data) {
    if(err) throw err;
    let hex = data.toString('hex', 0, 8);
    ara.push(hex);
    callback(callbackTwo, callbackThree, ara);
  });
};
