// Given the root of a binary tree, return the preorder traversal of its nodes' values.

const preorderTraversal = (root) => {
    let results = [];
    const helper = (node) => {
        if(!node) return null;
        
        if(node) {
            results.push(node.val);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        }
    }
    helper(root);
    return results;
};