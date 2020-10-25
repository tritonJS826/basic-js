const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
	members=members.map(item => {
		if ((typeof (item))==="string") {
			//убираем пробелы и оставляем только первый символ большой
			return item.replace(/\s+/g, '').toUpperCase()[0];

		} else {
			return "";
		}
	});

	if (members.includes(false)) return false;
	return members.sort().join("");
};
