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
 * Reads and returns the contents of any number of files with promises
 * @param paths
 */
   
const readAll = (paths) => {
  let allPromises = [];
  paths.forEach(path => {
    allPromises.push(readOne(path));
  });
  return Promise.all(allPromises)
    .then(results => {
      return results.reduce((contents, buffer) => {
        contents.push(buffer.toString().trim());
        return contents;
      }, []);
    });
};