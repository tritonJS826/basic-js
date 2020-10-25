const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str = '', options = {
	repeatTimes: 1,
	separator: '+',
	addition: '',
	additionRepeatTimes: 0,
	additionSeparator: '|'
}) {
  str = String(str);
  let outputStr = str;
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'} = options;
  addition = String(addition);
  if (!repeatTimes) repeatTimes=1;
  if (!additionRepeatTimes) additionRepeatTimes=1

  for (let i=1; i<repeatTimes; i++) {
    for (let j=1; j<=additionRepeatTimes; j++) {
    if (j<additionRepeatTimes) {
  outputStr += addition + additionSeparator;
    } else {
  outputStr += addition;
        }
}

outputStr += separator +str
  }

    for (let j=1; j<=additionRepeatTimes; j++) {
    if (j<additionRepeatTimes) {
  outputStr += addition + additionSeparator;
    } else {
  outputStr += addition;
        }
}




  return outputStr;
  // remove line with error and write your code here
};
