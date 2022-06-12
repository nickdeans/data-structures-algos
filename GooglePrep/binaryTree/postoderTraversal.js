// Given the root of a binary tree, return the postorder traversal of its nodes' values.

const postorderTraversal = (root) => {
    let results = [];
    const helper = (node) => {
        if(!node) return null;
        
        if(node) {
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            results.push(node.val);
        }
    }
    helper(root);
    return results;
};