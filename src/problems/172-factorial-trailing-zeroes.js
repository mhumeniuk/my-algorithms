/**
 * @param {number} n
 * @return {number}
 */

 var trailingZeroes = function(num) { //3
  let base = 5, zeros = 0;
  
  if (num < 5) {
      return zeros;
  }
  while(base <= num) {
      zeros += Math.floor(num / base);
      base *= 5;
  }
  return zeros;
};

