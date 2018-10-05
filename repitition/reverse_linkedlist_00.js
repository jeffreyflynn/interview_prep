class Node {
  constructor(value, next=null, prev=null) {
    this.value = value;
    this.next = next;
    // this.prev = prev;
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

  // Write an algorithm to find the kth to last element of a singly linked list.
  kth_node_iterative(k) {
    if (!this.head) return null;

    let count = 1;
    let current = this.head;

    while (count < k && current.next) {
      current = current.next;
      count++;
    }

    if (count === k) return current;

    else return undefined;
  }

  kth_node_recursive(k, current_node=this.head, count=1) {
    if (count === k) return current_node;
    else if (!current_node.next) return undefined;
    else return this.kth_node_recursive(current_node.next, count++);
  }
}



// REVERSE A SINGLY LINKED LIST --- ITERATIVE
// @param list -- an instance of a singly linked list
const iterative_reverse_sll = list => {
  if (!list.head) return null; 

  if (!list.head.next) return this.head;

  const nodes = []; 
  let current = list.head;

  while (current) {
    nodes.push(current);
    current = current.next;
  }

  const reversed = new SinglyLinkedList();
  let node = nodes.pop();

  reversed.head = node;
  node = nodes.pop(); 

  while (node) {
    node.next = null;
    current.next = node;

    current = current.next;
    node = nodes.pop();
  }

  return reversed;
}


const iterative_reverse_sll = list => {
  // if there is no head, there are no elements in the list, there is nothing to reverse
  if (!list.head) return null; 

  // if there is no element after the head, the head is the only element, there is nothing to reverse
  if (!list.head.next) return this.head;

  const nodes = []; // this is a stack --- last in, first out --- stack of plates
  let current = list.head; // reference to the top of the list

  // work through each node in the list from head to tail
  while (current) {
    nodes.push(current); // add the current node to our stack
    current = current.next; // move on to the next node on the list
  }

  const reversed = new SinglyLinkedList(); // init empty linked list

  // the least recently added element we haven't yet added to the reversed list
  let node = nodes.pop(); 

  // set the head of the reversed linked list to the tail of the original list
  reversed.head = node; 
  node = nodes.pop(); // move on the the next element - moving from tail to head


  while (node) {
    node.next = null;
    current.next = node;

    current = current.next;
    node = nodes.pop();
  }

  return reversed;
}