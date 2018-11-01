class Node {
  constructor(val) {
    this.value = val;
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
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
    }

    this.tail = node;
  }

  removeTail() {
    if (!this.head || !this.tail) {
      this.head = null;
      return;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
  }

  print() {
    let cur = this.head;
    while (cur) {
      console.log(cur.value);
      cur = cur.next;
    }
  }

  reverse() {
    // Set references to our current node and that node's previous node
    let cur = this.head, prev = null;

    // while our reference to the current node is not null
    while (cur) {
      // set a ref to the next node in the list
      let next = cur.next;

      // reverse the node's pointers - next = prev , prev = next
      cur.next = prev;
      cur.prev = next;

      // update our reference variables for the next iteration
      prev = cur;
      cur = next;
    }

    this.tail = this.head;
    this.head = prev;
  }
}

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

list.print();

list.reverse();

list.print();