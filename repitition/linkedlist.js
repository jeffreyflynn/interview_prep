class Node {
  constructor(value, next=null, prev=null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
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

  // if you move one pointer twice as fast as another pointer,
  // the fast pointer should eventually catch up to the slow pointer
  // if the fast pointer .next is null, the linked list has ended, thus there is no loop
  // if the fast pointer = the slow pointer, then a loop has been established
  checkForLoop() {
    let slow_pointer = this.head;
    let fast_pointer = this.head;

    while (slow_pointer && fast_pointer && fast_pointer.next) {
      slow_pointer = slow_pointer.next;
      fast_pointer = fast_pointer.next.next;

      if (slow_pointer.value === fast_pointer.value) return true;
    }

    return false;
  }

  getLength() {
    if (!this.head) return 0;

    let current = this.head;
    let count = 1;

    while (current.next) {
      current = current.next;
      count++;
    }

    return count;
  }
}



class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const newnode = new Node(value, null, this.tail);

    if (!this.head) {
      this.head = newnode;
      this.tail = newnode;
    }

    else {
      this.tail.next = newnode;
      newnode.prev = this.tail;
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
      this.head.prev = newnode;
      newnode.next = this.head;
      this.head = newnode;
    }
  }

  removeAnyNode(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
    }

    else {
      let current = this.head;

      while (current.next && current.value !== value) {
        current = current.next;
      }

      if (current.value === value) {
        current.prev.next = current.next.prev;
      } else {
        console.log(`There is no element with the value: ${value}`);
      }
    }
  }
}