/**
 * @param {number} size
 */
 var MovingAverage = function(size) {
  this.averages = [];
  this.size = size;
  this.tempSum = 0;
  return null
};

/** 
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  this.averages.push(val);

  if (this.averages.length > this.size) {
      this.averages.shift();
  }
  this.tempSum = 0;
  for (let i = 0; i < this.averages.length; i++) {
      this.tempSum += this.averages[i];  
  }

  return this.tempSum / this.averages.length;

};


/** 
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/