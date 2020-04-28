let fs = require("fs");
function promiseMultiFileReader(){
    let files = ["../f1.txt","../f2.txt","../f3.txt","../f4.txt","../f5.txt"];
    let fileWillBeReadPromise = fs.promises.readFile(files[0]);
    for(let i=1;i<files.length;i++){
        fileWillBeReadPromise = fileWillBeReadPromise.then(function(data){
            console.log(`File no ${i} printed`);
            let nfp = fs.promises.readFile(files[i]);
            return nfp;
        })
    }
    return fileWillBeReadPromise;
}
promiseMultiFileReader().then(function(data){
    console.log("File 5 will be printed");
    console.log(data);
})