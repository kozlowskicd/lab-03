'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promises.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      expect(err).toBeDefined();
    });
  });
  it('reads 1 file', () => {
    let file = ['.files/test.txt'];
    reader(file)
      .then((results) => {
        expect(results instanceof Array).toBeTruthy();
        expect(results.length).toBe(1);
      })
      .catch(err => {return err;});
  });
});

it('reads 2 files', () => {
  let files = ['./files/1.txt', './files/2.txt'];
  reader(files)
    .then((results) => {
      expect(results instanceof Array).toBeTruthy();
      expect(results.length).toBe(2);
    })
    .catch(err => {return err;});
});

it('reads 3 files', () => {
  let files = ['./files/1.txt', './files/2.txt', './files/3.txt'];
  reader(files)
    .then((results) => {
      expect(results instanceof Array).toBeTruthy();
      expect(results.length).toBe(3);
    })
    .catch(err => {return err;});
});