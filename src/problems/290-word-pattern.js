/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
  const patternHash = {};
  const words = s.split(" ");
  const unqiueWords = [];
  
  if (pattern.length !== words.length) {
     return false;
  }
  
  for (let i = 0; i < pattern.length; i++) {
      let key = pattern[i];
      if (typeof patternHash[key] == "undefined") {
          if (unqiueWords.includes(words[i])) {
              return false
          }
          else {
              patternHash[key] = words[i];
              unqiueWords.push(words[i]);
          }
      }
      else if (patternHash[key] !== words[i]) {
          return false;
      }
  }
  return true;
};