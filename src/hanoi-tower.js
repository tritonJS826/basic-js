const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2**disksNumber-1;
  let seconds = Math.floor(turns/(turnsSpeed/3600));

  return {seconds: seconds, turns: turns};
  // remove line with error and write your code here
};
