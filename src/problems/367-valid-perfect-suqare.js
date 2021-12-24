/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
  const range = [...Array(num).keys()];
  let middle = Math.ceil(range.length - 1/ 2);
  
  if (num === 1) {
      return true;
  }
  
  let current;
  let start = 0, end = range.length
  
  while(start < end) {
      middle = start + (end - start);
      current = middle * middle;
      if (current === num) {
          return true;
      }
      if (current > num) {
        end = middle - 1;
      }
      else {
        start = middle - 1;
      }
  }    
  return false
};