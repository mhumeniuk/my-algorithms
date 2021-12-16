

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//My slow solution 240ms
 var containsNearbyDuplicate = function(nums, k) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      hash[nums[i]] = hash[nums[i]] ?? [];
      //need just overweirte next i of nums[i], no need to store all of them
      hash[nums[i]].push(i); 
      let currentIndexes = hash[nums[i]]
      if (currentIndexes.length > 1) { 
         if (Math.abs(currentIndexes.shift() - currentIndexes[0]) <= k) {
             return true;
         };
      }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var properSolution = function (nums, k) {
  const map = new Map();
  for (let i =0;i< nums.length;i++) {
    if (i -map.get(nums[i])<=k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};