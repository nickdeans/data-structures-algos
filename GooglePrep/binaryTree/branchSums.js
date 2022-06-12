//   Write a function that takes in a Binary Tree and returns a list of its branch
//   sums ordered from leftmost branch sum to rightmost branch sum.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSums = (root) => {
  let results = [];
  let sum = 0;
  const helper = (node, sum) => {
    if(!node) return null;

    let newSum = sum + node.value;
    if(!node.left && !node.right) {
      results.push(newSum)
    }
    helper(node.left, newSum);
    helper(node.right, newSum);
  }
  helper(root, sum);
  return results;
}