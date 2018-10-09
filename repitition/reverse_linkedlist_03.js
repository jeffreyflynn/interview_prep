class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(val) {
    const newnode = new Node(val);

    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.prev = this.tail;
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }

  reverse() {
    if (!this.head) return null;

    
  }
}