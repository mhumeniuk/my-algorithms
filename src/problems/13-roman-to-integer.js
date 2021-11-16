/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  //first we create the hashtable to map roman string number to int
  //TODO: use js Map()?
  //s = "LVIII"
  //s = "MCMXCIV"
  //s = "III"
  //Sliding Window?
  //Complexity O(n), memory complexity O(?)
  const map = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900
  };
  let result = 0;
  let currentPossibleInts = [];
  for (let i = 0; i < s.length; i++) { 
    currentPossibleInts.push(s.charAt(i));
    if(currentPossibleInts.length == 2) {
      const possibleInt = currentPossibleInts.join("");
      if (typeof map[possibleInt] !== "undefined") {
        result += map[possibleInt];
        currentPossibleInts = [];
      }
      else {
        currentPossibleInts.splice(0,1).forEach(s => result += map[s]);
      }
    }
  }
  if (currentPossibleInts.length) {
    result += map[currentPossibleInts[0]];
  }
  return result;
};