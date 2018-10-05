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

  /* VISUAL STEP-BY-STEP --- REVERSE A LINKED LIST RECURSIVELY
  
    original linked list:

      | 0 |  -->  | 1 |  -->  | 2 |  -->  | 3 |  -->  null

          * { value: 0, next: 1 }
          * { value: 1, next: 2 }
          * { value: 2, next: 3 }
          * { value: 3, next: null }


    1st loop:
      * _curr = this.head = { value: 0, next: 1 }
      * _prev = null
      * 
      * _next = { value: 1, next: 2 }
      * 
      * _curr.next = this.head.next = _prev = null
      * _curr = { value: 0, next: null }
      * 
      * recurse - call function on itself with params _curr and _prev
        * _curr = _next = { value: 1, next: 2 }
        * _prev = _curr = { value: 0, next: null }
    

    null  <--  || 0 ||   -~-   | 1 |  -->  | 2 |  -->  | 3 |  -->  null
    

    2nd loop:
      * _curr = { value: 1, next: 2 }
      * _prev = { value: 0, next: null }
      * 
      * _next = { value: 2, next: 3 }
      * 
      * _curr.next = _prev = { value: 0, next: null }
      * _curr = { value: 1, next: 0 }
      * 
      * recurse - call function on itself with params _curr and _prev
        * _curr = _next = { value: 2, next: 3 }
        * _prev = _curr = { value: 1, next: 0 }
      

    null  <--  | 0 |  <--  || 1 ||   -~-   | 2 |  -->  | 3 |  -->  null


    3rd loop: 
      * _curr = { value: 2, next: 3 }
      * _prev = { value: 1, next: 0 }
      * 
      * _next = _curr.next = { value: 3, next: null }
      * 
      * _curr.next = _prev = { value: 1, next: 0 }
      * _curr = { value: 2, next: 1 }
      * 
      * recurse with @param _curr = _next = { value: 3, next: null }
      * recurse with @param _prev = _curr = { value: 2, next: 1 }
    

    null  <--  | 0 |  <--  | 1 |  <--  || 2 ||   -~-   | 3 |  -->  null


    4th loop: 
      * _curr = { value: 3, next: null }
      * _prev = { value: 2, next: 1 }
      * 
      * There is no next element. Time to set a new head pointer.
      * 
      * this.head = _curr = { value: 3, next: null }
      * this.head.next = _prev = { value: 2, next: 1 }
      * 
      * this.head = { value: 3, next: 2 }
    
      
    null  <--  | 0 |  <--  | 1 |  <--  | 2 |  <--  || 3 ||
  
  */
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