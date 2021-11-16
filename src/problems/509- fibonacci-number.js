/**
 * @param {number} 
 * @return {number}
 */

//0 <= n <= 30

var fib = function(n) {
  let memo = {};
  function fibNum(n, memo) { 
    if (n === 0) {
      return 0;
    }
    if (memo[n]) { 
      return memo[n];
    }
    if (n === 1 || n === 2) { 
      return 1; 
    } 
    memo[n] = fibNum(n - 1, memo) + fibNum(n - 2, memo);
    return memo[n];
  }
  return fibNum(n, memo); 
};

