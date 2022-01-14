

//using two stacks;
var MyQueue = function() {
  this.stack = [];
  this.tempStack = []
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  while(this.stack.length > 1) {
        this.tempStack.push(this.stack.pop());
  }
  
  let first = this.stack.pop();
  
  while(this.stack.length > 0) {
        this.stack.push(this.tempStack.pop());
  }
  return first;
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (this.stack[0]) {
      return this.stack[0];
  }
  return null;
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stack.length === 0;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/


var MyQueueFirstSolution = function() {
  this.stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if (typeof this.stack[0] !== "undefined") {
      return this.stack.splice(0, 1)[0];        
  }
  return null
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (this.stack[0]) {
      return this.stack[0];
  }
  return null;
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  if (this.stack.length === 0) {
      return true;
  }
  return false;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/