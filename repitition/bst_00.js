/* BINARY SEARCH TREE *//* 

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
}