
var Logger = function() {
  this.hash = {}
};

/** 
* @param {number} timestamp 
* @param {string} message
* @return {boolean}
*/
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (typeof timestamp === 'undefined' || typeof message === 'undefined') {
      return null;
  }
  const lastTimestamp = this.hash[message]; 
  if (typeof lastTimestamp === "undefined" || timestamp - lastTimestamp >= 10) {
      this.hash[message] = timestamp;
      return true;
  }
  return false;
};

/** 
* Your Logger object will be instantiated and called as such:
* var obj = new Logger()
* var param_1 = obj.shouldPrintMessage(timestamp,message)
*/