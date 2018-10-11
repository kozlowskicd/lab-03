'use strict';

const fs = require('fs');
const faker = require('faker');

let file = process.argv[2];
console.log(file);

const returnDataAsText = (err, data) => {
  if (err) {throw err;}
  let dataContent = data.toString().trim();
  console.log(`Reading file, contents: ${dataContent}`);
};

fs.readFile(file, returnDataAsText);

fs.appendFile(file, `, ${faker.random.word()}`, (err) => {
  if (err) {throw err;}
  console.log(`Writing to file: ${file}`);
});

fs.readFile(file, returnDataAsText);