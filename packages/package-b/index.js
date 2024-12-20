const packageA = require('package-a');

module.exports = () => {
  packageA();
  console.log('Hello from Package B!');
};