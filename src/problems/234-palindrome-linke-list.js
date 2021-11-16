/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */ 

//TODO: solve with O(n) time, O(1) for memory
 var isPalindrome = function(head) {
  if (head === null) {
      return false;
  }
  let chars = [];
  let currentNode = head;
  while(currentNode !== null) {
      chars.push(currentNode.val);
      currentNode = currentNode.next;
  }
  return chars.join("") == chars.reverse().join("");
};