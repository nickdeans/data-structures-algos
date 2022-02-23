// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

const isValidBST = (root) => {
    if(!root) return true;
    
    function helper(node, min, max) {
        if(!node) return true;
        
        if((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
            return false;
        }
        return helper(node.left, min, node.val) && helper(node.right, node.val, max)
    }
    return helper(root, null, null);
}