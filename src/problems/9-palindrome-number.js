/**
 * @param {number} x
 * @return {boolean}
 */

/** Return true if interger is a palindrome
 *  Example: 121 is apalindrome
 *  Follow up solve without converting to integer
 */

//Always check few cases before submitting try to break it

//Complexity is O(n)
//Memory complexety: todo calculate
var isPalindrome = function(x) { //10 //11 //1122 //100 //1000030001
  if (isNaN(parseInt(x)) || x < 0) {
    return false;
  }

  const str = `${x}`;

  if (str.length === 2) {
    return str.charAt(0) !== str.charAt(1) ? false : true;
  }
 ////100
  const middle = Math.ceil(str.length / 2); //2  str[2] == 0
  //we're going untill we reach middle and checking if strings still same
  let result = true;
  for (let i = 0; i < middle; i++) { //0 !== str[0] = 1 
    if (str.charAt(i) !== str.charAt((str.length - 1) - i)) {
      result = false;
    }
  }
  return result;
};
