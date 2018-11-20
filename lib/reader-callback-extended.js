'use strict';

const fs = require('fs');

/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */

module.exports = exports = (files, callback) => {
  readAll([...files],callback);
};



/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */

const readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};

/**
 * Reads and returns the contents of 3 files
 * Requires 3 paths, otherwise, it'll fail with aggression
 * @param paths
 */
   
const readAll = (paths, callback) => {
  if(paths.length === 0) {return null;}
  if(paths.length === 1) {
    let contents = [];
    readOne(paths[0], (err, data) => {
      if(err) {callback(err);}
      else {
        contents.push(data.toString().trim());
        callback(undefined, contents);
      }
    });
  }
  if(paths.length > 1) {
    let contents = [];
    paths.forEach((path) => {
      readOne(path, (err, data) => {
        if(err) {callback(err);}
        else {
          contents.push(data.toString().trim());
          callback(undefined, contents);
        }
      });
    });
  }
};