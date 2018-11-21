'use strict';

jest.unmock();
jest.mock('fs');

const reader = require('../../lib/reader-promises.js');

describe('File Reader Module', () => {

  // it('when given a bad file, returns an error', () => {
  //   let files = ['bad.txt'];
  //   reader(files)
  //     .then(results => {
  //       expect(results).toBeNull();
  //     });
  // });  
  it('reads 3 files', () => {
    let files = ['../../files/1.txt', '../../files/2.txt', '../../files/3.txt'];
    console.log(reader(files));
  });
});