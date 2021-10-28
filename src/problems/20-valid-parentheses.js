/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * 
 */ 

//Complexity O(n)?, Memory complxity
//TODO: remove char from string as we go so we avoid ifs

var isValid = function(s) {
  let stack = [];
  let mapPar = {
    "(":")",
    "[":"]",
    "{":"}"
  };
  let openingChars = ["(", "[", "{"]; //maybe better to have Object.keys(mapPar)
  for(let i = 0; i < s.length; i++) { 
    if (openingChars.includes(s.charAt(i))) { 
      //why currentChar = s.charAt(i);  
      //openingChars.includes(currentChar) === false?
      stack.push(s.charAt(i));
      hadOpening = true;
    }
    else if (!hadOpening) {
      return false;
    }
    else if(stack.length) {
      let currentStack = stack[stack.length - 1];
      if (mapPar[currentStack] === s.charAt(i)) {
        stack.pop();
      }
      else {
        return false;
      }
    }
    else {
        return false
    }
  }
  return stack.length == 0;
};