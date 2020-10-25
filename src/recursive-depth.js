const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

    calculateDepth( arr ) {

		let depth =0;
		if (Array.isArray(arr)) {
			arr.forEach(el => {
			//depth = Math.max(depth, this.calculateDepth(el)); // более читабельное чем мое
				let currentDep = this.calculateDepth(el);
				if (depth<currentDep) {depth = currentDep}			
			});
			return depth+1;
		}
	return 0;

    }
    // remove line with error and write your code here

};
