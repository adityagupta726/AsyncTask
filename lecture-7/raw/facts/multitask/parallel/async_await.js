let fs = require("fs");
(async function promises(){
    try{
        let data1 =  fs.promises.readFile("../../f1.txt");
     
        let data2 =  fs.promises.readFile("../../f2.txt");
        
        let data3 =  fs.promises.readFile("../../f3.txt");
        let newdata1=await data1;
        console.log(`File 1 ${newdata1.byteLength}`);
        let newdata2=await data2;
        console.log(`File 2 ${newdata2.byteLength}`);
        let newdata3=await data3;
        console.log(`File 3 ${newdata3.byteLength}`);
    }
    catch(err){
console.log(err);
    }


})();