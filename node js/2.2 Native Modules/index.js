const fs=require("fs");

// fs.writeFile("mesage1.txt","hello world from the NodeJs",(err)=>{
//     if (err) throw err;
//     console.log('this file has been saved bingo');
// });

fs.readFile("mesage1.txt",'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})