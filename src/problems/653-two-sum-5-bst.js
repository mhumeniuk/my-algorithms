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
 * @param {number} 
 * @return {boolean}
 */

//Good solution, used hint, breadth first search
var findTarget = function(root, k) {
    const stack = [root];
    let hashset = new Set();
    
    while(stack.length !== 0) {
        let currentNode = stack.pop();
   
        if (hashset.has(k - currentNode.val)) {
            return true;
        }
        //BFS
        hashset.add(currentNode.val);
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
    }
    return false;
};

//Better solution, also really slow
 var findTarget = function(root, k) {
    let result = false;
    const searchTree = (node, val) => {
        if (node.val === val) {
            result = true;
        }
        if (node.left !== null && node.val > val) {
            searchTree(node.left, val);
        }
        if (node.right !== null && node.val < val) {
            searchTree(node.right, val);
        }
    }
    
    const traverseTree = (node) => {
        const rest = k - node.val;
        if (rest !== node.val) { 
            searchTree(root, rest);
            if (result === true) {
                return true;
            }
        }
        if (node.left !== null) {
           traverseTree(node.left); 
        }
        if (node.right !== null) {
           traverseTree(node.right); 
        }
    }
    traverseTree(root)
    return result;
};

 var findTargetBrute = function(root, k) {
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