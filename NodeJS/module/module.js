const webAddress = "arkusnexus.com"
const number = 29;
const userName = "Lalo.rs"
const array = ["Shadowplay", "Run For Cover", "Boy", "One More Time", "Around the world"]

// Agrupar esas constantes en un objeto Best Practice

const group = {
    webAddress: webAddress,
    number: number,
    userName: userName,
    array: array
}

// console.log(group);

// module.exports = webAddress;
// module.exports = group;

// otra forma de exportar todas las variables usando un arreglo 

module.exports = {
    webAddress,
    number,
    userName,
    array
}

// console.log(module);

// Exports individuales

module.exports.userName = userName;
module.exports.array = array;