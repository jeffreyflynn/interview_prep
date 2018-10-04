class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newnode = new Node(value);

    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    }

    else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
  }

  addToHead(value) {
    const newnode = new Node(value);

    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    }

    else {
      newnode.next = this.head;
      this.head = newnode;
    }
  }

  removeHead() {
    if (!this.head) return null;

    if (!this.head.next) {
      delete this.head;
      return;
    }

    const newhead = this.head.next;
    delete this.head;
    this.head = newhead;
    
    return this.head;
  }
}