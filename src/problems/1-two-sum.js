/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let rest = target - nums[i];
        if (typeof hash[rest] !== "undefined" && hash[rest] !== i ) {
            return [i, hash[rest]];
        }
    }

    return [];
};

 var twoSumBrute = function(nums, target) {
  const newNums = nums.slice().sort();
  //const hash = {};
  
  /*for (let i = 0; i < nums.length; i++) {
      hash[nums[i]] = i;
  }*/
  
  let start, end;
  //still n2, think about how to do o(n)
  for (let i = 0; i < newNums.length; i++) {
      for(let j = i + 1; j < newNums.length; j++) {
          //TODO: hashtbale fails when duplicate number[3,3]
          if (newNums[i] + newNums[j] == target) {
              if (newNums[i] === newNums[j]) { //edge case
                  return [nums.indexOf(newNums[i]), nums.lastIndexOf(newNums[j])];
              }
              return[nums.indexOf(newNums[i]), nums.indexOf(newNums[j])];
          }
      }  
  }

  return [];
};