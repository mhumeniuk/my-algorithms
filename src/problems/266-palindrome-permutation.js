/**
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
  const hash = {}; //can use Map here;
  let hashLength = 0;
  let oddLength = 0;
  for (let i = 0; i < s.length; i++) {
      let key = s[i];
      hash[key] = hash[key] ?? 0;
      hash[key] += 1;
  }
  
  Object.keys(hash).forEach((key) => {
      if (hash[key] % 2 == 0) {
          hashLength += hash[key]
      }
      else {
          oddLength += 1;
      }
  });
  if (hashLength && oddLength <= 1 || oddLength == 1) {
      return true;
  }
  return false;
};