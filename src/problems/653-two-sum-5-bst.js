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
 * @param {number} k
 * @return {boolean}
 */
//Super dumb shamefull brute force version. TODO: write O(log(n))
 var findTarget = function(root, k) {
  const queue = [];   
  const traverseTree = (node) => {
      queue.unshift(node.val);
      if (node.left !== null) {
         traverseTree(node.left); 
      }
      if (node.right !== null) {
         traverseTree(node.right); 
      }
  }
  
  traverseTree(root);
  
  if (queue.length == 1) {
      return false
  }
  
  for (let i=0; i< queue.length; i++) {
      for(let j = i + 1; j<queue.length; j++) {
          if (queue[j] + queue[i] == k) {
              return true;
          }
      }
  }
  return false;
};