const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (arguments.length === 0) return "Unable to determine the time of year!";
	//if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error; --это конечно покрасивше моего
	if (Object.getOwnPropertyNames(date).length != 0) throw new Error;
	if (date.getMonth()<12 && date.getMonth()>=0) {

		if (date.getMonth()==11 || date.getMonth()<2) {
			return "winter";
		} else 	if (date.getMonth()<5) {
			return "spring";
		} else	if (date.getMonth()<8) {
			return "summer";
		} else if (date.getMonth()<11) {
			return "fall";
		}
}
};
