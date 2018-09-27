/* LINKED LISTS

  Three basic operations:
    * searching
    * insertion
    * deletion

*/


class Node {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  add_to_head = data => {
    const node = new Node(data, null, this.head);
    if (!this.head) this.tail = node;
    else this.head.prev = node;
    this.head = node;
  }


  add_to_tail = data => {
    const node = new Node(data, this.tail, null);
    if (this.tail) this.tail.next = node;
    else this.head = node;
    this.tail = node;
  }

  delete_node = node => {

  }

  // Write code to remove duplicates from an unsorted linked list.
}

/*******************************************************************/

const list = new LinkedList();