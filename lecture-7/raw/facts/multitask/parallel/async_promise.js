let fs = require("fs");
let file1WillBeReadPromise = fs.promises.readFile("../../f1.txt")
file1WillBeReadPromise.then(function(data){
console.log(`file 1-${data.byteLength}`);
}
).catch(function(err){
    console.log(err);
})

let file2WillBeReadPromise = fs.promises.readFile("../../f2.txt")
file2WillBeReadPromise.then(function(data){
console.log(`file 2-${data.byteLength}`);
}
).catch(function(err){
    console.log(err);
})

let file3WillBeReadPromise = fs.promises.readFile("../../f3.txt")
file3WillBeReadPromise.then(function(data){
console.log(`file 3-${data.byteLength}`);
}
).catch(function(err){
    console.log(err);
})