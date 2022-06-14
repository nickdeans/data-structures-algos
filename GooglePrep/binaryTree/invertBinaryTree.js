//   Write a function that takes in a Binary Tree and inverts it. In other words,
//   the function should swap every left node in the tree for its corresponding
//   right node.

const invertBinaryTree = (tree) => {
  if(!tree) return;
  const helper = (node) => {
    const left = node.left;
    node.left = node.right;
    node.right = left;
  }
  helper(tree)
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}