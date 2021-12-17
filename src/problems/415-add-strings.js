/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  const numbersHash = {
      "0":0,
      "1":1,
      "2":2,
      "3":3,
      "4":4,
      "5":5,
      "6":6,
      "7":7,
      "8":8,
      "9":9,
  };
  let rest = 0;
  let finalNumber = [];
  let nums1 = num1.split("");
  let nums2 = num2.split("");
  let tempSum = 0;
  
  while(nums1.length !== 0 || nums2.length !== 0) {
      let current1 = nums1.pop() ?? 0;
      let current2 = nums2.pop() ?? 0;
      
      tempSum = numbersHash[current1] + numbersHash[current2]; //5 + 6 + 1
      
      if (rest) {
          tempSum = tempSum + rest;
          rest = 0;
      }

      if (tempSum >= 10) {
          tempSum = tempSum - 10;
          rest = 1;
      }
      
      finalNumber.unshift(tempSum);
  }
  if (rest) {
      finalNumber.unshift(rest);
  }
  
  return finalNumber.join("")
};