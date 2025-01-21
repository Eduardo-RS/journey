const { readFile } = require("fs");
const { promisify } = require("util");

//Usando Promisify
const readFilePromise = promisify(readFile);
// console.log(readFilePromise);

// Refactor a una promesa
// const getText = (pathFile) => {
//   return new Promise((resolve, reject) => {
//     readFile(pathFile, (err, data) => {
//       if (err) {
//         reject(err);
//       }
//       resolve(data.toString());
//     });
//   });
// };


const readFiles = async () => {
    try {
      // throw new Error('Unexpected custom error')
      const result = await readFilePromise("./data/1.txt");
      const result1 = await readFilePromise("./data/2.txt");
      console.log(result.toString());
      console.log(result1.toString());
    } catch (error) {
      console.log(error);
    }
  };
  
  readFiles();