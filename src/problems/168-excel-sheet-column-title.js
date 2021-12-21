/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
  const power = 26
  const aCharCode = "A".charCodeAt();
  let result = [];
  
  while(columnNumber > 0) {
      columnNumber--;
      result.unshift(String.fromCharCode(aCharCode + columnNumber % power)); 
      columnNumber = Math.floor(columnNumber / power); 
  }
  return result.join("");
}