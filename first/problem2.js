var prompt = require("prompt-sync")();

const length = prompt("Enter Length : ");
const breadth = prompt("Enter Breadth : ");

const area = length * breadth;

console.log("The area of Rectangle is :", area);