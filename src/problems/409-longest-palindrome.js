
//my solution

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  let tempPalindromeLength = 0;
  let hash = {};
  let couplesLength = 0;
  let singlesLength = 0;
  for (let i = 0; i < s.length; i++) {
      hash[s.charAt(i)] = hash[s.charAt(i)] || 0;
      hash[s.charAt(i)] += 1;
  }
  
  Object.keys(hash).forEach(key => {
      if (hash[key] >= 2) {
          const leftover = hash[key] % 2;
          couplesLength += hash[key] - leftover;
          singlesLength += leftover
      }
      else {
          singlesLength += 1;
      }
  });
  
  tempPalindromeLength = couplesLength + (singlesLength > 0 ? 1 : 0);
  return tempPalindromeLength;
};

/**
 * @param {string} s
 * @return {number}
 */
//better solution
/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  const map = new Map();
  
  for (let i = 0; i < s.length; i++){
      if (!map.get(s[i])) {
          map.set(s[i],1)    
      }
      else {
          map.delete(s[i])
      }
  }
  
  if (map.size > 0) {
    return s.length - map.size + 1
  }
  return s.length
};