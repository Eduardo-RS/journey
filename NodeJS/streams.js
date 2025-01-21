// const { writeFile } = require("node:fs/promises");


// //Crear un archivo
// const createBigFile = async () => {
//   await writeFile("./data/bigFile.txt", "Hello, World!".repeat(1000000));
// };

// createBigFile();

const { createReadStream } = require('node:fs');

// Create a stream from some character device.
const stream = createReadStream('./data/bigFile.txt', 'utf-8');

stream.on('data', (chunk) => {
    console.log('someone connected!', chunk);
})