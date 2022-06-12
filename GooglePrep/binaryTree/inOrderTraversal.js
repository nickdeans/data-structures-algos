// Given the root of a binary tree, return the inorder traversal of its nodes' values.


const inorderTraversal = (root) => {
    let results = [];
    const helper = (node) => {
        if(!node) return null;
        
        if(node) {
            if(node.left) helper(node.left);
            results.push(node.val);
            if(node.right) helper(node.right);
        }
    }
    helper(root);
    return results;
};