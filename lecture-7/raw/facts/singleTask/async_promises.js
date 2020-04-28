let fs = require("fs");
let fileWillBeReadPromise = fs.promises.readFile("../f1.txt");
fileWillBeReadPromise.then(function(data){
console.log(`Data of file 1 - ${data.byteLength}`);
})