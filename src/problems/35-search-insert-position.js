/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  const recursion = (start, end, nums, target) => { //0,1
      const middle = Math.floor((start + end) / 2); 
      if (nums[middle] === target) { //target is in array
          return middle;
      }
      
      if (nums[middle] < target && nums[middle + 1] > target) {
          return middle + 1;                      
      }
              
      if (middle === 0 && nums[middle] > target) {
          return 0;
      }
      
      if (middle === nums.length - 1) {
          return nums.length;
      }
      
      if (target < nums[middle]) {
         return recursion(start, middle - 1, nums, target);  
      }
      
      if (target > nums[middle]) {
         return recursion(middle + 1, end, nums, target);
      }
  }
  
  let result = recursion(0, nums.length - 1, nums, target);
  
  return result;
};