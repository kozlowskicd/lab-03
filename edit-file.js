'use strict';

const fs = require('fs');
let file = process.argv[2];
console.log(file);
const returnDataAsText = (err, data) => {
  if (err) {throw err;}
  let dataContent = data.toString().trim();
  console.log(dataContent);
};

fs.readFile(file, returnDataAsText);