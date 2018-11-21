'use strict';

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */

module.exports = exports = (files) => {
  readAll(files);
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
  return new Promise((resolve, reject) => {
    let contents = [];
    return readFile(paths[0])
      .then(results => {
        contents.push(results.toString().trim());
        return readOne(paths[1]);
      })
      .then(results => {
        contents.push(results.toString().trim());
        return readOne(paths[2]);
      })
      .then(results => {
        contents.push(results.toString().trim());
        console.log(contents);
        return contents;
      })
      .catch(err => {throw err;});
  });
};