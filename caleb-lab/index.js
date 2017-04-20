'use strict';

const readFiles = require('./lib/readFile.js');
const paths = [
  `${__dirname}/data/lyric.txt`,
  `${__dirname}/data/new-lyric.txt`,
  `${__dirname}/data/newest-lyric.txt`,
];

const pathsTwo = [
`${__dirname}/data/text.txt`,
`${__dirname}/data/new-lyric.txt`,
`${__dirname}/data/newest-lyric.txt`,
];
readFiles(paths);

// 1 - 0000
// 2 - 0001
// 3 - 0010
// 4 - 0011
// 5 - 0100
// 6 - 0101
// 7 - 0110
// 8 - 0111
// 9 - 1000
// 10 - 1001
// 11 - 1010
// 12 - 1011
// 13 - 1100
// 14 - 1101
