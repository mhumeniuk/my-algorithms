/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
      hash[nums[i]] = hash[nums[i]] ?? 0;
      hash[nums[i]] += 1;
      //we always assume that we have a majority element so this should be safe?
      if (hash[nums[i]] >= Math.ceil(nums.length / 2)) {
          return nums[i];
      }
  }
};