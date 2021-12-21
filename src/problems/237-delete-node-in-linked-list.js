/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
  let currentNode = node;
  let previousNode = null;
  while (currentNode.next !== null) {
      if (currentNode.next) {
          currentNode.val = currentNode.next.val;
      }
      previousNode = currentNode;
      currentNode = previousNode.next;
      if (currentNode.next === null) {
          previousNode.next = null
      }
  }
};