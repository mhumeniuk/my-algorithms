/**
 * 
  Given a string s and an integer array indices of the same length.

  The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

  Return the shuffled string.
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

//Test cases s = "abc", indices = [0,1,2], s = "aiohn", indices = [3,1,4,2,0]
//"aaiougrt", indices = [4,0,2,6,7,3,1,5]
//s = a, indeces = [5]
//Complexity O(n)?
//TODO: calculate memory complexity, decrease memory complexity
var restoreString = function(s, indices) { 
    let result = []; 
    if (s.length == 0) {
      return "";
    }
    for (let i = 0; i<indices.length; i++) { //i = 2, ind = 2, str = c
      result[indices[i]] = s.charAt(i); //[a,b,c]
    }
    return result.join("");
};