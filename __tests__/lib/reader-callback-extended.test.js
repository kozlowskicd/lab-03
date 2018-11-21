'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-callback-extended.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', done => {
    let files = ['bad.txt'];
    // In jest, throwing errors obviously kills the app, so if you're
    // going to throw one in a test, have the expect execute your code as a
    // function so that you can trap it.
    reader(files, (err,data) => {
      expect(err).toBeDefined();
      done();
    });
  });
  it('reads 1 file', done => {
    let file = ['../../files/test.txt'];
    reader(file, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array).toBeTruthy();
      expect(data.length).toBe(1);
      done();
    });
  });
  it('reads 2 files', done => {
    let files = ['../../files/1.txt', '../../files/2.txt'];
    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array).toBeTruthy();
      expect(data.length).toBe(2);
      done();
    });
  });
  it('reads 3 files', done => {
    let files = ['../../files/1.txt', '../../files/2.txt', '../../files/3.txt'];
    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(3);
      done();
    });
  });
  it('reads 6 files', done => {
    let files = ['../../files/1.txt', '../../files/2.txt', '../../files/3.txt', '../../files/test.txt', '../../files/2.txt', '../../files/3.txt'];
    reader(files, (err,data) => {
      expect(err).toBeUndefined();
      expect(data instanceof Array ).toBeTruthy();
      expect(data.length ).toBe(6);
      done();
    });
  });
});