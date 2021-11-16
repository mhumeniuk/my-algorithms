/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let min = prices[0]; 
  let max = 0;
  for (let i = 1; i < prices.length; i++) { 
    min = Math.min(prices[i], min); 
    max = Math.max(max, prices[i] - min); 
  }
  return max;
};

 var maxProfitBrute = function(prices) {
  let max = 0;
  let nextProfit= 0;
  for (let i = 0; i < prices.length; i++) { 
      for (let j = i + 1; j < prices.length; j++) {
        nextProfit = prices[j] - prices[i];
        if (nextProfit > max) {
          max = nextProfit;
        }
      }
  }
  return max;
};