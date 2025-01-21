// const { rejects } = require("assert");
const { readFile } = require("fs");
// const { resolve } = require("path");

// codigo asincrono
const read = readFile("./data/1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// Refactor a una promesa
const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data.toString());
    });
  });
};


getText('./data/1.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))