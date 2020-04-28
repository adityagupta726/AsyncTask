let fs = require("fs");
let file1WillBeReadPromise  = fs.promises.readFile("../f1.txt");
file1WillBeReadPromise.then(function(data){
    console.log(`f1 - ${data.byteLength}`);
    if(data.byteLength>20){
        let file2WillBeReadPromise = fs.promises.readFile("../f2.txt");
       file2WillBeReadPromise.then(function(data){
        console.log(`f2 - ${data.byteLength}`);
        if(data.byteLength>40){
            let file6WillBeReadPromise = fs.promises.readFile("../f6.txt");
            file6WillBeReadPromise.then(function(data){
                console.log(`f6 - ${data.byteLength}`); 
            })
        }
        else{
            let file7WillBeReadPromise = fs.promises.readFile("../f7.txt");
            file7WillBeReadPromise.then(function(data){
                console.log(`f7 - ${data.byteLength}`); 
            }) 
        }
       })
    }
    else{
        let file3WillBeReadPromise = fs.promises.readFile("../f3.txt");
        file3WillBeReadPromise.then(function(data){
         console.log(`f3 - ${data.byteLength}`);
         if(data.byteLength<30){
             let file6WillBeReadPromise = fs.promises.readFile("../f4.txt");
             file6WillBeReadPromise.then(function(data){
                 console.log(`f4 - ${data.byteLength}`); 
             })
         }
         else{
             let file7WillBeReadPromise = fs.promises.readFile("../f5.txt");
             file7WillBeReadPromise.then(function(data){
                 console.log(`f5 - ${data.byteLength}`); 
             }) 
         }
        })
    }
})
