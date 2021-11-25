/**
 * @param {number[]} nums
 * @return {boolean}
 */

/** 
 * weirdness of leetcode enviroment
 * this wouldn't work 
 * numsHash[nums[i]] = typeof numsHash[nums[i]] !== "undefined" ? numsHash[nums[i]] + 1 : 0;
 */
 var containsDuplicate = function(nums) {
  let numsHash = {};
  for (let i = 0; i < nums.length; i++) {
      numsHash[nums[i]] = typeof numsHash[nums[i]] !== "undefined" ? numsHash[nums[i]] : 0;
      numsHash[nums[i]] += 1;
      if (numsHash[nums[i]] > 1) {
          return true
      }
  }
  return false;
};