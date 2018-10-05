/* BINARY SEARCH TREE *//* 

All nodes in a binary search tree follow the binary search tree rules.

Rules:
  * all left children are less than the current node
  * all right children are greater than the current node
  * typically duplicates are not allowed

Traversal Methods:
  * pre-order  ~  current, left, right  ~  root node is always visited first
  * in-order   ~  left, current, right
  * post-order ~  left, right, current  ~  root node is always visited last

Types of Trees:
  * complete   ~  every level is filled  ~  exception: last element of last level is empty
  * full       ~  every node has either 0 or 2 children
  * perfect    ~  both full and complete

*/

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newnode = new Node(value);
    let current = this.root;

    while(true) {
      if (value > current) {
        if (current.right) current = current.right;
        else {
          current.right = newnode;
          break;
        }
      }
      else if (value < current) {
        if (current.left) current = current.left;
        else {
          current.left = newnode;
          break;
        }
      }
      else return null; // exception for duplicates perhaps
    }
  }

  search(value, current=this.root) {
    // if there is no current node,
    // or if the current node's value equals the input, 
    // return current node
    if (!current || current.value === value) return current;

    // if the input val is greater than the current node's value,
    // then search the right child node
    if (value > current.value) this.search(value, current.right);

    // if the input val is less than the current node's value,
    // then search the left child node
    if (value < current.value) this.search(value, current.left);
  }
}