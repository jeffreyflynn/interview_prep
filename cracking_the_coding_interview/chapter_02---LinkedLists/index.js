/* LINKED LISTS

  Three basic operations:
    * searching
    * insertion
    * deletion

*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add_to_tail = data => {
    if (!this.head) {
      const node = new Node(data, null, null);
      this.head = node;
      this.tail = node;
    }
    else if (this.head === this.tail) {
      const node = new Node(data, this.head, null);
      this.head.next = node;
      this.tail = node;
    }
    else {
      const node = new Node(data, this.tail, null);
      this.tail.next = node;
      this.tail = node;
    }
  }

  // Write code to remove duplicates from an unsorted linked list.
}

class Node {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

/*******************************************************************/

const list = new LinkedList();