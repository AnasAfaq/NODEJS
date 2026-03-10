/*function add(a,b){
    return a+b;
}

console.log("addition is : ", add(2,67));
*/

//-------------------------------------------------//

/*
const add = function(a,b){
    return a+b;
}
console.log("Addition is : ",add(9,7));
*/

//-------------------------------------------------//

/*
function callback(){
    console.log("adding successfull");
}
const add = function(a,b,callback){
    var res = a+b;
    console.log("result : ", res);
    callback();
}
add(3,9,callback);
*/

//-------------------------------------------------//

const add = function(a,b,callback){
    var res = a+b;
    console.log("result : ", res);
    callback();
}
add(3,9,()=>{console.log("callback is done")});