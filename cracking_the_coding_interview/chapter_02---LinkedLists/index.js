/* LINKED LISTS

*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

class Node {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}


// Write code to remove duplicates from an unsorted linked list.
