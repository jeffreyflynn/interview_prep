/*
A Tree is a data structure composed of nodes.
  * each tree has a root node 
  * a root node has 0+ child nodes
  * each child node has 0+ child nodes

A BINARY TREE is a tree in which each node has up to two child nodes.

A BINARY SEARCH TREE is a tree in which each node follows a specific order.
  * all left decendents are less than the current node
  * all right decendents are greater than the current node
  * duplicate node values are often restricted (clarify with interviewer)

Types of Binary Trees: 
  * Complete --- every level of the tree is filled (except for perhaps the last node (furthest right) on the bottom level)
  * Full --- every node has either 0 or 2 children (no node can have only one child)
  * Perfect --- a tree that is both full and complete
*/


/*
Binary Tree Traversal

IN-ORDER
  * visits the left branch, then the current node, then the right branch

PRE-ORDER
  * visit the current node before its child nodes have been visited 
  * the root node is always the first node visited

POST-ORDER
  * visit the current node after its child nodes have been visited
  * the root node is always the last node visited 


** to traverse a tree without recursion, use a stack **

*/


// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
// directed graph i.e. each node can only point to one other node

// example: A -> B -> C -> A

class DirectedGraph {
  constructor() {
    this.graph = {};
  }

  add_node = (name, neighbor) => {
    this.graph[name] = neighbor;
  }

  route_exists = (node_a, node_b) => {}
}
