//   You're given the head of a Singly Linked List whose nodes are in sorted order
//   with respect to their values. Write a function that returns a modified version
//   of the Linked List that doesn't contain any nodes with duplicate values. The
//   Linked List should be modified in place (i.e., you shouldn't create a brand
//   new list), and the modified Linked List should still have its nodes sorted
//   with respect to their values.

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const removeDuplicatesFromLinkedList = (linkedList) => {
  let currentNode = linkedList;
  while(currentNode) {
    let distinctNode = currentNode.next;
      while(distinctNode && distinctNode.value === currentNode.value) {
      distinctNode = distinctNode.next;
    }
    currentNode.next = distinctNode;
    currentNode = distinctNode;
  }
  return linkedList;
}