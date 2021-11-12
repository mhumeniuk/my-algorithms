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
var reverseList = function(head) {
    if (head == null) {
      return head;
    }
    if (head.next == null) {
      return head;
    }
    let currentNode, previousNode, nextNode;
    currentNode = head;
    while(currentNode !== null) { //1 -> 2 -> 3
      if (typeof previousNode === 'undefined') {
        previousNode = currentNode;
        currentNode = currentNode.next;
        head.next = null;  
      }
      else {
        nextNode = currentNode.next; //null
        currentNode.next = previousNode; //3 -> 2 -> 1 -> null
        previousNode = currentNode; //3
        currentNode = nextNode;
      }
    }
    return previousNode;
};