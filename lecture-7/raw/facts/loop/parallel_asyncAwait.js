let fs = require("fs");

(async function promises(){
    let data=[];
    try{
        let files = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt","../f5.txt"];
        for(let i=0;i<files.length;i++){
         data[i]= fs.promises.readFile(files[i]);
        }
        for(let i=0;i<data.length;i++){
            data[i]= await data[i];
            console.log(`File no ${i+1} printed ${data[i].byteLength}`);
           }
     
    }
    catch(err){
        console.log(err);
    }
})();