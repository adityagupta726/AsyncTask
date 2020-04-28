setTimeout(function(){
    console.log("Task 1")
},3000);

let f1 = Date.now()+3*1000;
while(Date.now()<f1){

}
setTimeout(function(){
    console.log("Task 2")
},2000);

setTimeout(function(){
    console.log("Task 3")
},2000);

