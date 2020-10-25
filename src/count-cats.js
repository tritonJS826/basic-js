const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let cats = 0;
	matrix.forEach((line)=>{
		line.forEach((elem)=>{
			if (elem === "^^") cats++;
		});
	});
return cats;
  // remove line with error and write your code here
};
