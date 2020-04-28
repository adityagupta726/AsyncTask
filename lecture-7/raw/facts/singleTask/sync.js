let fs = require("fs");
console.log("Starting Executing file");
console.log("Cpu is stuck");
let content  = fs.readFileSync("../xyz.html");
console.log(content.byteLength);
console.log("Cpu is free now");
console.log("stop");