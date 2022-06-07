class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if(this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node)
  }

  setTail(node) {

  }

  insertBefore(node, nodeToInsert) {
    if(nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if(node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    } 
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {

  }

  insertAtPosition(position, nodeToInsert) {

  }

  removeNodesWithValue(value) {
    
  }

  remove(node) {
    if(node === this.head) {
      this.head = this.head.next;
    }
    if(node === this.tail) {
      this.tail = this.tail.prev;
    }
    if(node.prev) {
      node.prev.next = node.next
    }
    if(node.next) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }

  containsNodeWithValue(value) {
    let node = this.head;
    // while(node) {
    //   if(node.value === value) {
    //     return true;
    //   }
    //   node = node.next;
    // }
    // return false;
    while(node !== null && node.value !== value) node = node.next;
    return node !== null
  }
}