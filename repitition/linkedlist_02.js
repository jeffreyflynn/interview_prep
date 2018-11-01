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


}

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

list.print();