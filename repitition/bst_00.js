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


// RECURSIVE BINARY SEARCH TREE
class Recursive_BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value, root=this.root) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }

    if (value > root.value) {
      if (!root.right) root.right = new Node(value);
      else this.insert(value, root.right);
    } else {
      if (!root.left) root.left = new Node(value);
      else this.insert(value, root.left);
    }
  }

  search(value, current=this.root) {
    // if there is no current node,
    // or if the current node's value equals the input, 
    // return current node
    if (!current) {
      console.log(current);
      return current;
    }

    if (current.value === value) {
      console.log(current);
      return current;
    }

    // if the input val is greater than the current node's value,
    // then search the right child node
    if (value > current.value) this.search(value, current.right);

    // if the input val is less than the current node's value,
    // then search the left child node
    if (value < current.value) this.search(value, current.left);
  }

  inOrder(current=this.root) {
    if (current) {
      this.inOrder(current.left);
      console.log(current.value);
      this.inOrder(current.right);
    }
  }
}


// ITERATIVE BINARY SEARCH TREE
class Iterative_BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newnode = new Node(value);

    if (!this.root) {
      this.root = newnode;
      return;
    }
    
    let current = this.root;

    while(true) {
      if (value > current.value) {
        if (current.right) current = current.right;
        else {
          current.right = newnode;
          break;
        }
      }
      else if (value < current.value) {
        if (current.left) current = current.left;
        else {
          current.left = newnode;
          break;
        }
      }
      else return null; // exception for duplicates perhaps
    }
  }

  search(value) {
    if (!this.root) return null;

    let current = this.root;

    while (current) {
      if (current.value === value) return current.value;

      if (value < current.value) current = current.left;

      else current = current.right;
    }

    return null;
  }
}


// Let's populate out Binary Search Tree.

// const bst = new Recursive_BinarySearchTree();
const bst = new Iterative_BinarySearchTree();

bst.insert(111);
bst.insert(4);
bst.insert(21);
bst.insert(30);
bst.insert(7);
bst.insert(65);
bst.insert(48);

bst.search(5);

// bst.inOrder();