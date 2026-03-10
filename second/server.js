/*
function mul(a,b){
    return a*b;
}

var res = mul(4,2);
console.log(res);
*/

//---------------------------------------------//

/*
const external = require('./imp_exp.js');
console.log("this is main server");

var age = external.age;
console.log(age);

var result = external.mulNum(age,16);
console.log("result is : ",result);
*/
//------------------------------------//
var _ = require('lodash');
var arr = ["jay","veeru",786,34,"basanti","jay",786,12,"basanti",786];
var filter = _.uniq(arr);
console.log(filter);