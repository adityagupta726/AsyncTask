let fs=require("fs");
console.log("hi");
fs.readFile("../../f1.html",function(err,data){
    console.log("f1");
    fs.readFile("../../f2.html",function(err,data){
        console.log("f2");
        
    })
})
console.log("bye");