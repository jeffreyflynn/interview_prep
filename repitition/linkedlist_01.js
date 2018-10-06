class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newnode = new Node(value);

    if (!this.head) {
      this.head = newnode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newnode;
  }

  delete(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let prev, current = this.head;

    while (current.next && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (current.value !== value) return null;

    prev.next = current.next;
  }

  search(value) {
    if (!this.head) return null;

    let current = this.head;

    while (current.value !== value && current.next) {
      current = current.next;
    }

    if (current.value !== value) return null;

    console.log("found it: ", current.value);
    return current.value;
  }

  print() {
    const result = [];

    if (!this.head) return result;

    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result);
    return result;
  }

  reverse() {
    if (!this.head || !this.head.next) return null;

    let _prev = null, 
        _curr = this.head,
        _next = null;

    while (_curr) {
      _next = _curr.next;
      _curr.next = _prev;
      _prev = _curr;
      _curr = _next;
    }

    this.head = _prev;
  }
}


const sll = new LinkedList();

sll.insert(0);
sll.insert(1);
sll.insert(2);
sll.insert(3);

sll.print();

sll.search(3);

sll.print();

sll.reverse();

sll.print();