let prompt = require("prompt-sync")();

let guestList = ["gabbar","kaliya","jageera","sambha","thakur"]

let name = prompt("Enter Your Name : ");

let result = guestList.filter(check);

function check(guestName){
    return name == guestName;
}
if(result.length > 0){
    console.log("Welcome...",name);
}else{
    console.log("Sorry !!!");
}