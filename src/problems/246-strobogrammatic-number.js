/**
 * @param {string} num
 * @return {boolean}
 */
 var isStrobogrammatic = function(num) {
  const rotated = {
    6:9,9:6,8:8,1:1,0:0
  }

  let start = 0;
  let end = num.length - 1;

  let isStrobo = true;
  
  if (start === end) {
      isStrobo = num[start] == rotated[num[end]]; 
  }
  
  while(end >= 0) {
      if (num[start] != rotated[num[end]]) { //0,1
         isStrobo = false;
         break;
      }
      start++;
      end--;
  }
  
  return isStrobo;
  
};