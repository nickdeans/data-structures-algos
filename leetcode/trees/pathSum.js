// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such 
// that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

const hasPathSum = (root, targetSum) => {
    let result = false;
    
    function helper(node, totalSum) {
        if(!node) return;
        
        totalSum += node.val;
        
        if(!node.left && !node.right && totalSum === targetSum) {
            result = true;
        } else {
            helper(node.left, totalSum);
            helper(node.right, totalSum);
        }
    }
    helper(root, 0);
    return result;
}