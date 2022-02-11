// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

const isSymmetric = (root) => {
    const queue = [];
    
    queue.push(root, root);
    
    while (queue.length) {
        const node1 = queue.shift();
        const node2 = queue.shift();
        
        if (!node1 && !node2) continue;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        
        queue.push(node1.left, node2.right);            
        queue.push(node1.right, node2.left);
    }
    
    return true;
};