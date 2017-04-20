'use strict';

const fs = require('fs');
const Buffer = require('buffer').Buffer;


fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err;

  let oneBuffer = Buffer.from(data);

  return oneBuffer.toString('hex', 0, 8);
});
