/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
  if (root === null || (root.left === null && root.right === null)) {
      return 0;
  }
  
  const treeTraverse = (node, sum, isLeft) => {
     //we're looking for left leaves not nodes. Pay more attention
     if (isLeft && node.left == null && node.right == null) {
       sum = sum + node.val;    
     }
     if (node.left !== null) {
        sum = treeTraverse(node.left, sum, true);
     }
     if (node.right !== null) {
        sum = treeTraverse(node.right, sum, false); 
     }
     return sum;
  }
  
  return treeTraverse(root, 0, false);
};