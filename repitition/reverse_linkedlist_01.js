// Reverse a Singly Linked List.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(value) {
    const newnode = new Node(value);

    if (!this.head) this.head = newnode;

    else if (!this.tail) {
      this.head.next = newnode;
      this.tail = newnode;
    }

    else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }

  // remove() { ... }

  // search() { ... }

  // etc.
}


const reverseLinkedList = ogList => {
  if (!ogList.head || !ogList.tail) return null; // nothing to do here

  const stackOfNodes = [];
  let current = ogList.head;

  while (current) {
    stackOfNodes.push(current);
    current = current.next;
  }

  const reversed = new LinkedList();

  current = stackOfNodes.pop();
  reversed.head = current;
  current = stackOfNodes.pop();

  while (current) {
    current.next = null;
    reversed.insert(current);
    current = stackOfNodes.pop();
  }

  return reversed;
}