let fs = require("fs");
(async function promises(){
    try{
        let files = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt","../f5.txt"];
        for(let i=0;i<files.length;i++){
        let data = await fs.promises.readFile(files[i]);
        console.log(`File no ${i+1} printed ${data.byteLength}`);
        }
    }
    catch(err){
        console.log(err);
    }
})();