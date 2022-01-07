/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


//Bad O(n2) solution. TODO: make better complexity
 var twoSum = function(nums, target) {
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