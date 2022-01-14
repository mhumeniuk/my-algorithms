
var MyStack = function() {
  this.queue = [];
  this.tempQueue = [];
};

/** 
* @param {number} x
* @return {void}
*/

//why not unshift?
MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  while(this.queue.length > 1) {
     this.tempQueue.unshift(this.queue.shift());
  }
  let last = this.queue.shift();
  while(this.tempQueue.length) {
      this.queue.unshift(this.tempQueue.shift());
  }
  this.tempQueue = [];
  return last;
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  return this.queue[this.queue.length - 1];
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue.length == 0;
};

/** 
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/