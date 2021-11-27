/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let stringsArr = s.trim().split(" ");
    return stringsArr[stringsArr.length - 1].trim().length;
};