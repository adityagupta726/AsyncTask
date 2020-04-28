let fs = require("fs");
(async function promiseConsumer(){
    try{
let data = await fs.promises.readFile("../f1.txt");
console.log(`File1 data ${data.byteLength} `);
    }
    catch(err){
        console.log(err);
    }
})();
