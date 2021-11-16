
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let currentNode = head; //6 
  let previousNode; 
  if (head === null) { 
    return head;
  }
  while(currentNode !== null) {  
    if (currentNode.val === val) { //6
        if (typeof previousNode !== "undefined") {
          previousNode.next = currentNode.next;
          currentNode = currentNode.next;  
        }
        else { //[7,1,7]
         head = currentNode.next; //head == null
         currentNode = head; //currentNode == null
        }
    }
    else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return head;
};