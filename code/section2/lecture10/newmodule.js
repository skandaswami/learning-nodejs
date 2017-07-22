console.log('New module was started!');
module.exports.property='This is a property';
module.exports.addNote = () => {
  console.log('Called the funciton addNote!');
  return 'addNote function returned this.';
};
module.exports.addNumbers = (a,b) => {
  return a+b;
}

