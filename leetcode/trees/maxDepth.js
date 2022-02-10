// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from 
// the root node down to the farthest leaf node.

const maxDepth = (root) => {
    if(!root) return 0;
    let queue = [];
    let levels = 0;
    
    queue.push(root);
    while(queue.length) {
        count = queue.length;
        for(let i = 0; i < count; i++) {
            let node = queue.shift();
            
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        levels++
    }
    return levels;
};