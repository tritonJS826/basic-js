const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw 'Not implemented';
  if (arr.length === 0) return arr;
  // console.log(arr)
  let outputArray = [];
  // console.log('массив'+arr);
  for (let i = 0; i < arr.length; i++) {
    // console.log('элементэ'+arr[i]);
    switch(arr[i]) {
      case `--discard-next`:
        if (arr[i+2] === "--double-prev" || arr[i+2] === "--discard-prev") {
          i++;
        }
        i++;
        break;
      case `--discard-prev`:
        if (i != 0) outputArray.pop();
        break;
      case `--double-next`:
        if (i != arr.length-1 )outputArray.push(arr[i + 1]);
        break;
      case `--double-prev`:
        if (i != 0) outputArray.push(arr[i - 1]);
        break;
      default:
        outputArray.push(arr[i]);
        break;
    }
  };

  return outputArray;

};
