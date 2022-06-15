//  Write a function that takes in a potentially invalid Binary Search Tree (BST)
//  and returns a boolean representing whether the BST is valid. 

function validateBst(tree) {
  let minValue = -Infinity;
  let maxValue = Infinity;

  const helper = (node, minValue, maxValue) => {
    if(!node) return true;

    if(node.value < minValue || node.value >= maxValue) return false;
    const leftIsValid = helper(node.left, minValue, node.value);
    return leftIsValid && helper(node.right, node.value, maxValue);
  }
  return helper(tree, minValue, maxValue)
}