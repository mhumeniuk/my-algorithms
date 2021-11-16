/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//TODO: solve as two pointer;
 var middleNode = function(head) {
  let counter = 1;
  let currentNode = head;
  let prevNode;
  
  while (currentNode.next) {
    counter++;
    currentNode = currentNode.next;
  }
  
  currentNode = head;
  let middleCount = Math.ceil(counter/2);
  let isTwoMiddle = counter % 2 == 0;
  
  counter = 1;
  while (currentNode.next) {
    if (counter == middleCount) {
      if (isTwoMiddle) {
        return currentNode.next;
      }
      else {
        return currentNode; 
      }
    }
    else {
      counter++;
      currentNode = currentNode.next;
    }
  }
  return currentNode;
};

var middleNodeAlt = function(head) {
  let counter = 1;
  let currentNode = head;
  let prevNode;

  while (currentNode.next) {
    counter++;
    currentNode = currentNode.next;
  }
  
  currentNode = head;
  let middleCount = Math.floor(counter/2);

  while (middleCount !== 0) {
    currentNode = currentNode.next;
    middleCount--;
  }
  return currentNode;
};

var goodSolutionFromLeetcodeSubmissions = function(head) {
  // two pointer, once pointer hits the end the first pointer is in the middle
  let slow = head
  let fast = head
  
  while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
  }
  
  return slow;
};

//Initial bad idea reversing linked list. Since I though it i need two lists for "Two Pointer" problem
/*while (currentNode !== null) {
  let nextNode;
  if (typeof prevNode !== "undefined") {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
  }
  else if (currentNode.next === null) {
      nextNode = currentNode.next;
      currentNode.next = head;
  }
  else {
      nextNode = currentNode.next;
      currentNode.next = null;
  }

  prevNode = currentNode;
  currentNode = nextNode    
}*/  