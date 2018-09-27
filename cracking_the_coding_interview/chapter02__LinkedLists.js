/* LINKED LISTS

  Three basic operations:
    * searching
    * insertion
    * deletion

  Circular linked list:
    A -> B -> C -> D -> E -> C
*/


class Node {
  constructor(data, previous, next) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}


class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Write an algorithm to find the kth to last element of a singly linked list.
  kth_to_last = k => {
    if (!this.head) return null;

    const recurse = (current_node, count = 1) => {
      if (count === k) return current_node.data;
      else if (!current_node.next) return null;
      else return rewind(current_node.next, count++);
    }

    return recurse(this.head);
  }
}


class DoublyLinkedList {
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
    if (!this.head || !this.tail) return null;

    const cache = {};

    const recurse = (current_node) => {
      if (!cache[current_node.data]) cache[current_node.data] = true;
      else if (!current_node.next) {
          this.tail = current_node.previous;
          this.tail.next = null;
      } else {
        current_node.previous.next = current_node.next;
        current_node.next.previous = current_node.previous;
      }
      if (!current_node.next) return;
      return recurse(current_node.next);
    }

    return recurse(this.head);
  }


  // Write an algorithm to find the kth to last element of a singly linked list.
  kth_to_last = k => {
    if (!this.head || !this.tail) return null;

    const rewind = (current_node, count = 1) => {
      if (count === k) return current_node.data;
      else if (!current_node.previous) return null;
      else return rewind(current_node.previous, count++);
    }

    return rewind(this.tail.previous)
  }


  find_node = data => {
    if (!this.head) return null;

    const recurse = current_node => {
      if (current_node.data === data) return current_node;
      if (!current_node.next) return null;
      return recurse(current_node.next);
    }

    return recurse(this.head);
  }


  // Write a method to check if a linked list is a palindrome.
  is_palindrome = () => {
    const result = "";

    const recurse = current_node => {
      result += current_node.data;
      if (!current_node.next) return result;
      return recurse(current_node.next);
    }

    if (!this.head) return false;
    else if (recurse(this.head) === [...result].reverse().join("")) return true;
    else return false;
  }
}

/*******************************************************************/

const list = new LinkedList();