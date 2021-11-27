/**
 * @param {string} s
 * @return {number}
 */


//Solved with help
 var firstUniqChar = function(s) {
  let indexes = {};
  for (let i = 0; i < s.length; i++) { 
      indexes[s.charAt(i)] = typeof indexes[s.charAt(i)] !== 'undefined' ? indexes[s.charAt(i)] + 1 : 1;    
  }
  
  for (let i = 0; i < s.length; i++) {
      if (indexes[s.charAt(i)] == 1) {
          return i;    
      }
  }
  return -1;
};

var firstUniqCharWrong = function(s) {
  let queue = [];
  let indexes = {};
  for (let i = 0; i < s.length; i++) {
      let counter = 0;
      queue.push(s.charAt(i));
      indexes[s.charAt(i)] = i; 
      for (let j = 0; j < s.length; j++) {
          if (s.charAt(j) === s.charAt(i)) {
              counter++;
          }
      }
      if (counter > 1) {
        queue.pop();
      }
  }
  if (queue.length > 0) {
      return indexes[queue.shift()];
  }
  return -1;
};