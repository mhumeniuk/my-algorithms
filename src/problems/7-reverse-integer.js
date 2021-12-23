/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  const isNegativeInt = x < 0;
  let boundary = Math.pow(2, 31) - 1;
  let intArr = x.toString().split("").reverse()
  if (isNegativeInt) {
     intArr.unshift(intArr.pop());
  }
  let reversedInt = parseInt(intArr.join(""));
  //return boundary
  if (isNegativeInt && reversedInt < (boundary * -1)) {
      return 0;
  }
  else if (reversedInt > boundary) {
      return 0;
  }
  return reversedInt
};