/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let hasBeen = {}
  let currentNum = n;
  while(true) {
      let ints = `${currentNum}`.split('').map(n => parseInt(n));
      currentNum = ints.reduce((accum, int) => int ** 2 + accum, 0); // int ** 2 == Math.pow(int, 2)
      if (hasBeen[currentNum]) {
          return false;
      }
      hasBeen[currentNum] = true;
      if (currentNum === 1) {
          return true;
      }
  }
};