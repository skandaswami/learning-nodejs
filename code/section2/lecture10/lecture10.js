console.log('Starting the app!');

const fs = require("fs");
const os = require("os");
const newmodule = require("./newmodule.js")

var username = os.userInfo().username;

fs.appendFile('greetings.txt',`\nHello ${username}! and what I wanted to say is ${newmodule.property}`,function(err){
  if (err) throw err;
  console.log('The text was successfully appended to the file.')
})

console.log(newmodule.addNote());
console.log(newmodule.addNumbers(9,-2));

