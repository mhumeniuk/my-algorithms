/**
 * @param {number} n
 * @return {number}
 */

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/ 

var climbStairs = function(n) {
  let memo = {};

  let numWays = function(n) {
    if (n in memo) {
        return memo[n];
    }
    if (n < 4) {
        memo[n] = n;
        return memo[n];
    }
    memo[n] = (numWays(n - 1) + numWays(n - 2));
    return memo[n];
  }

  return numWays(n);
};


/*var climbStairs = function(n) { 
  let counter = 0; 
  let paths = ["111","12", "21"];
  function findSteps(step, currentCounter) {
    currentCounter += step; //2 
    if (currentCounter === n) {
      paths.push(path);
      return 1;
    }
    else if (currentCounter > n) {
      paths.push(path);
      return 0;
    }
    counter += findSteps(1, currentCounter + 1); //1
    counter += findSteps(2, currentCounter + 2); //2
  }
  findSteps(0,0);
  return counter;
};*/

/*var climbStairs = function(n) {
  let times = 0  
  let currentSum = 0;
  const steps = [1,2];
  let paths = [];
  let currentPath = "";
  let counter = 0
  while(currentSum < n) {
      if (currentSum + steps[1] <= n) {
      currentSum += steps[1];
      currentPath += steps[1];
    }
    else if (currentSum + steps[1] <= n) {
      currentSum += steps[0];
      currentPath += steps[0];
    }
    else () {
     
    }
    if (currentSum === n) {
      paths.push(currentPath);
      currentPath = 0;
      times += 1;
    }

    counter++;
  }
  return times;
};*/