//   The distance between a node in a Binary Tree and the tree's root is called the
//   node's depth.
//   Write a function that takes in a Binary Tree and returns the sum of its nodes'
//   depths.

const nodeDepths = (root, depth = 0) => {
  if(!root) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}