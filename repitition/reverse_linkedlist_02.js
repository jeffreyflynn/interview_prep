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
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  print() {
    const result = [];

    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    console.log(result);
  }

  reverse() {
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


const l = new LinkedList();

l.insert(3);
l.insert(13);
l.insert(7);

console.log("\n\n")
l.print();
console.log("\n\n")

l.reverse();

console.log("\n\n")
l.print();
console.log("\n\n")