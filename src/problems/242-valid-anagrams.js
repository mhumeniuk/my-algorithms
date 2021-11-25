/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  //could just use string.split("") here
  let sChars = [];
  let tChars = [];
  for (let i = 0; i < s.length; i++) {
      sChars.push(s.charAt(i));
  }
  for (let i = 0; i < t.length; i++) {
      tChars.push(t.charAt(i));
  }
  
  return sChars.sort().join() === tChars.sort().join();
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram2 = function(s, t) {
  return s.split("").sort().join() === t.split("").sort().join();
};