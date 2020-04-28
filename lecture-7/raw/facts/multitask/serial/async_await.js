let fs = require("fs");
(async function promises(){
    try{
        let data1 = await fs.promises.readFile("../../f1.txt");
        console.log(`File 1 ${data1.byteLength}`);
        let data2 = await fs.promises.readFile("../../f2.txt");
        console.log(`File 2 ${data2.byteLength}`);
        let data3 = await fs.promises.readFile("../../f3.txt");
        console.log(`File 3 ${data3.byteLength}`);
    }
    catch(err){
console.log(err);
    }


})();