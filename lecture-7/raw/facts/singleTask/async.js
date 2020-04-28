let fs = require("fs");
console.log("Starting Executing file");
console.log("Cpu is stuck");
fs.readFile("../f1.txt",function(err,data){
    console.log(data.byteLength);
})
console.log("Cpu is free now");
console.log("stop");