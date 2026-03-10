var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('new.txt','Hi' + user.username + '!\n',()=>{
    console.log("Callback is working.. file created!!!");
});

console.log(os);