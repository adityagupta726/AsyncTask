//f1 =>read   //f2 =>read
// let fs = require("fs");
// console.log("Starting Executing file");
// console.log("Cpu is stuck");
// fs.readFile("../../xyz.html",function(err,data){
//     console.log("File1 "+data.byteLength);
// });
// let finalTime=Date.now()+30000
// while(Date.now()<finalTime){

// }
// console.log("Started file2 reading");
// fs.readFile("../../abc.html",function(err,data){
//     console.log("File2 "+data.byteLength);
// });
// console.log("Cpu is free now");
// console.log("stop");
let fs = require("fs");
console.time("task1");
fs.readFile("../../f1.txt",function(err,data){
    console.log(data.byteLength);
    console.timeEnd("task1");
})
console.time("task2");
fs.readFile("../../f1.txt",function(err,data){
    console.log(data.byteLength);
    console.timeEnd("task2");
})

console.time("task3");
fs.readFile("../../f1.txt",function(err,data){
console.log(data.byteLength);
console.timeEnd("task3");
}
)