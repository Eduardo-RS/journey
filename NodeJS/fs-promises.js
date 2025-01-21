const { readFile } = require("fs/promises");

const readFiles = async () => {
  try {
    // throw new Error('Unexpected custom error')
    const result = await readFile("./data/1.txt");
    const result1 = await readFile("./data/2.txt");
    console.log(result.toString());
    console.log(result1.toString());
  } catch (error) {
    console.log(error);
  }
};

readFiles();