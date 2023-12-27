// Intuition

//     Using Depth-First Search (DFS) algorithm.

// Approach

//     In this code, we define a TreeNode class to represent the nodes of the binary tree.

//     The minDepth function takes a root node as input and recursively calculates the minimum depth of the tree.
//     We handle several base cases in this problem :-

//     If the root is null, the tree is empty, so the minimum depth is 0.
//     If the root has no children (i.e., both left and right are null), it is a leaf node, and the minimum depth is 1.
//     If the root has only one child (either left or right), we recursively calculate the minimum depth of that child and add 1.
//     If the root has both left and right children, we recursively calculate the minimum depth of both children and take the minimum of the two depths, then add 1 to account for the current level.

// Complexity

//     Time complexity: O(n)O(n)O(n)

//     Here n is the number of nodes in the binary tree.
//     This is because we visit each node once during the depth-first search traversal.
//     In the worst case, we need to visit all nodes of the tree to calculate the minimum depth.

//     Space complexity: O(h)O(h)O(h)

//     Here h is the height of the binary tree.
//     In the worst case, the height of the tree is equal to the number of nodes, resulting in O(n) space complexity.
//     This occurs when the binary tree is skewed, and each node only has one child.
//     The space complexity is determined by the maximum number of recursive calls on the call stack at any given time, which is equal to the height of the tree.
//     However, in a balanced binary tree, the height is approximately log(n), resulting in O(log n) space complexity.

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
var minDepth = function(root) {
  
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }

  if (root.left === null) {
    return minDepth(root.right) + 1;
  }

  if (root.right === null) {
    return minDepth(root.left) + 1;
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;  
};