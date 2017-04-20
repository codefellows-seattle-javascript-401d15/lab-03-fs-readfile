'use strict';

module.exports = exports = {};

const fs = require('fs');

// exports.getSmall = new Promise(function(resolve) {
//   fs.readFile(`${__dirname}/../text/small.txt`, function(err, data) {
//     if(err) throw err;
//     let smallData = data.toString();
//     if (resolve) resolve(smallData);
//   });
// });
//
// exports.getMedium = new Promise(function(resolve) {
//   fs.readFile(`${__dirname}/../text/medium.txt`, function(err, data) {
//     if(err) throw err;
//     let mediumData = data.toString();
//     if (resolve) resolve(mediumData);
//   });
// });
//
// exports.getLarge = new Promise(function(resolve) {
//   fs.readFile(`${__dirname}/../text/large.txt`, function(err, data) {
//     if(err) throw err;
//     let largeData = data.toString();
//     // retrevialOrder.push(largeData);
//     if (resolve) resolve(largeData);
//   });
// });

exports.getSmall = function(callback, callbackTwo, ara) {
  fs.readFile(`${__dirname}/../text/small.txt`, function(err, data) {
    if(err) throw err;
    let hex = data.toString('hex', 0, 8);
    // console.log(`small ${hex}`);
    ara.push(hex);
    // console.log('array in small', ara);
    callback(callbackTwo, ara);
  });
};

exports.getMedium = function(callback, ara) {
  fs.readFile(`${__dirname}/../text/medium.txt`, function(err, data) {
    if(err) throw err;
    let hex = data.toString('hex', 0, 8);
    // console.log(`medium ${hex}`);
    ara.push(hex);
    // console.log('array in medium', ara);
    // Promise.resolve(ara);
    callback(ara);
  });
};

exports.getLarge = function(callback, callbackTwo, callbackThree, ara) {
  fs.readFile(`${__dirname}/../text/large.txt`, function(err, data) {
    if(err) throw err;
    let hex = data.toString('hex', 0, 8);
    // console.log(`large ${hex}`);
    ara.push(hex);
    // console.log('array in large', ara);
    callback(callbackTwo, callbackThree, ara);
  });
};


// put the it blocks in the function(data) aread
// exports.process = function() {
//   let order = [];
//   exports.getLarge(exports.getSmall, exports.getMedium, function(data){
//     console.log(data, 'what is here????');
//   }, order);
  // resolve(order);
  // Promise.reject('error');
// };

// exports.getLarge(exports.getSmall, order);
