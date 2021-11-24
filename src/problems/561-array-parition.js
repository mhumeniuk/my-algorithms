//my solution
/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
  //make sure you know how sorting works
  const sortedNums = nums.sort((a,b) => a - b);
  let sum = 0;
  let counter = 0;
  while(counter < sortedNums.length) {
      sum += Math.min(sortedNums[counter], sortedNums[counter + 1]);
      counter += 2;
  }
  return sum;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var SampleArrayPairSum = function(nums) {
  return nums.sort((a, b) => a - b) //sort the array asc
              //since we always take the lowest number this is basically Math.min here
              .filter((_, idx) => idx % 2 === 0)
              .reduce((acc, element) => acc += element);
};