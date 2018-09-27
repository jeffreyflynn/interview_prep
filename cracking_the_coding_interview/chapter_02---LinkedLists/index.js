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


  delete_head = () => {
    if (!this.head) return null;

    const old_head = this.head.data;

    this.head = this.head.next;
    if (this.head) this.head.previous = null;
    else this.tail = null;

    return old_head;
  }


  delete_tail = () => {
    if (!this.tail) return null;

    const old_tail = this.tail.data;

    this.tail = this.tail.previous;
    if (this.tail) this.tail.next = null;
    else this.head = null;

    return old_tail;
  }


  // Write code to remove duplicates from an unsorted linked list.
  remove_duplicates = () => {
    if (!this.head) return null;

    const cache = {};

    const recurse = (current_node) => {
      if (!current_node.next) return;
      if (!cache[current_node.data]) cache[current_node.data] = true;
      else {
        current_node.previous.next = current_node.next;
        current_node.next.previous = current_node.previous;
      }
      return recurse(current_node.next);
    }

    return recurse(this.head);
  }
}

/*******************************************************************/

const list = new LinkedList();