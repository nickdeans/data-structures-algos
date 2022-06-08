class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const sumOfLinkedLists = (linkedListOne, linkedListTwo) => {
  let newLinkedListHead = new LinkedList(0);
  let currentNode = newLinkedListHead;
  let carry = 0;

  let nodeOne = linkedListOne;
  let nodeTwo = linkedListTwo;
  while(nodeOne !== null || nodeTwo !== null || carry !== 0) {
    const valueOne = nodeOne !== null ? nodeOne.value : 0;
    const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
    const sumOfValues = valueOne + valueTwo + carry;

    const newValue = sumOfValues % 10;
    const newNode = new LinkedList(newValue);
    currentNode.next = newNode;
    currentNode = newNode;

    carry = Math.floor(sumOfValues / 10);
    nodeOne = nodeOne !== null ? nodeOne.next : null;
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null;  
  } 
  return newLinkedListHead.next;
}