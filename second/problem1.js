const fs = require('fs');

/*
fs.appendFile('data.txt',"Hello NodeJS",()=>{
    console.log("operation of appending text into data.txt executed");
});
*/

/*
fs.readFile('data.txt','utf8',(err,info)=>{
    console.log(info);
});
*/

/*
fs.appendFile('data.txt','Learning NodeJS\n',()=>{
    console.log('executing writing...');
});
*/

/*
fs.rename('data.txt','new.txt',()=>{
    console.log('file is renamed to new.txt');
})
*/

fs.rm('demo.txt',()=>{
    console.log('demo.txt is removed');
});