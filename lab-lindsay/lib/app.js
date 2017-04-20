'use strict';

const fs = require('fs');

fs.readFile(`${__dirname}/data/one.txt`, function(err, data) {
  if(err) throw err;
  let newData = data.toString();
  newData += '\n\n I am new text blah blah blah';

  fs.writeFile(`${__dirname}/data/`)
})
