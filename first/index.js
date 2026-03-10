var prompt = require('prompt-sync')();
const age = prompt("Please enter your age : ");

// const ages = [32,33,16,40];
// const result = ages.filter(checkAge);

if(age<=18){
    console.log("Nabalig hai tu Chintu");
}else{
    console.log("Shadi kar skte ho");
}
