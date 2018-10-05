/* REVERSE A SINGLY LINKED LIST */

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

  // iterative approach
  // time complexity: O(n)  ~  space complexity: O(1)
  reverse_iterative() {
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

  // recursive approach
  // @param _curr  |  @type Node  |  @default this.head
  // @param _prev  |  @type Node  |  @default null
  // time complexity: O(n)  ~  space complexity: O(1)
  reverse_recurse(_curr=this.head, _prev=null) {
    // if this is the last element of the linked list,
    // set the head pointer to this last element of the original linked list,
    // and set the new head's next node to the element that originally came before it
    if (!_curr.next) {
      this.head = _curr;
      this.head.next = _prev;
      return;
    }

    // else
    // set a temp variable to the next element
    let _next = _curr.next;
    // set the current nodes next value to the node that originally came before it
    _curr.next = _prev;
    // reverse the next two elements
    this.reverse_recurse(_next, _curr);
  }
}



/* Let's build a linked list. */

const l = new LinkedList();

l.insert(1);
l.insert(2);
l.insert(3);

console.log("\n\n")
l.print();
console.log("\n\n")

l.reverse_recurse();

console.log("\n\n")
l.print();
console.log("\n\n")

l.reverse_iterative();

console.log("\n\n")
l.print();
console.log("\n\n")