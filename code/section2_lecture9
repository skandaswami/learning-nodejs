console.log('Starting the app!');

const fs = require("fs");
const os = require("os");

var username = os.userInfo().username;

fs.appendFile('greetings.txt','\nHello '+username+'!',function(err){
  if (err) throw err;
  console.log('The text was successfully appended to the file.')
})

