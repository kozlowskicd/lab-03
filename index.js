'use strict';
// const fileReader = require('./lib/reader.js');
// const fileReader = require('./lib/reader-callback-extended.js');
// const fileReader = require('./lib/reader-promises.js');
const fileReader = require('./lib/reader-promise-all.js');
// Obtain and assert input
let files = process.argv.slice(2);
if( ! (files instanceof Array && files.length) ) {
  throw new Error('Invalid Args');
}

fileReader(files, (err,data) => {
  if ( err ) { throw err; }
  console.log('From Callback:', data);
});