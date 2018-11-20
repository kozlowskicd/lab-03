'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */

module.exports = exports = (files) => {
  readAll([...files])
    .then(results => {console.log(results);});  //Need this line to see the results in the console
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */

const readOne = (file) => {
  return readFile(file);
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
   
const readAll = (paths) => {
  // console.log(paths);
  let contents = [];
  return readFile(paths[0])
    .then(results => {
      console.log('1');
      contents.push(results.toString().trim());
      return readOne(paths[1]);
    })
    .then(results => {
      console.log('2');
      contents.push(results.toString().trim());
      return readOne(paths[2]);
    })
    .then(results => {
      console.log('3');
      contents.push(results.toString().trim());
      return contents;
    })
    .catch(err => {throw err;});
};