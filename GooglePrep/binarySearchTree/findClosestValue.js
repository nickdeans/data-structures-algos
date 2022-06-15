//   Write a function that takes in a Binary Search Tree (BST) and a target integer
//   value and returns the closest value to that target value contained in the BST.

const findClosestValueInBst = (tree, target) => {
  let current = tree;

  while(current) {
    let currNode = Math.abs(current.value - target);
    let treeNode = Math.abs(target - tree.value);
    
    if(treeNode > currNode) {
      tree.value = current.value;
    } 
    
    if(target < current.value) {
      current = current.left;
    } else if(target > current.value) {
      current = current.right
    } else {
      break;
    }
  }
  return tree.value;
}