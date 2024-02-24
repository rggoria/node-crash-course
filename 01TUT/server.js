console.log("Hello World");
console.log(global);
const os = require("os");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

const path = require("path");

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));

const { add, subtract, multiply, divide } = require("./math");
console.log(add(1, 2));
console.log(subtract(2, 1));
console.log(multiply(2, 2));
console.log(divide(2, 2));
