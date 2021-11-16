/**
 * @param {string[]} ops
 * @return {number}
 */
//["5","2","C","D","+"] 
//Time elapsed: 35 mins
var calPoints = function(ops) {
  let score = 0;
  let stack = []; // []
  for (let i = 0; i<ops.length; i++) { //[5,10,]
    let op = ops[i]; //D
    if (op === "+") {
      stack.push(+stack[stack.length-1] + +stack[stack.length-2]);
    }
    else if (op === "D") {
      stack.push(stack[stack.length-1] * 2);
    }
    else if (op === "C") {
      stack.pop()
    }
    else {
      stack.push(op);
    }
  }
  stack.forEach(function(s) {
    score = score + +s;
  })
  return score;
};