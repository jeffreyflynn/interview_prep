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


/* Binary Tree Traversal

IN-ORDER
  * visits the left branch, then the current node, then the right branch

PRE-ORDER
  * visit the current node before its child nodes have been visited 
  * the root node is always the first node visited

POST-ORDER
  * visit the current node after its child nodes have been visited
  * the root node is always the last node visited 

*** to traverse a tree without recursion, use a stack ***/


class BSTnode {
  constructor(value, right=null, left=null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.currentNode = this.root;
  }

  insert(value) {
    const newnode = new BSTnode(value);

    if (this.root === null) {
      this.root = newnode;
      return;
    }
  }
}


/* Min Heaps and Max Heaps

Min
  * a complete binary tree where each node is smaller than its children 
  * the root node is therefore the minimum element
  * key operations: INSERT and EXTRACT_MIN

Max
  * a complete binary tree where each node is greater than its children
  * the root node is therefore the maximum element
  * the root node is therefore the minimum element
  * key operations: INSERT and EXTRACT_MAX

*/



/* GRAPHS

  * A graph is a collection of nodes with edges between them.
  * Types of graphs: DIRECTED (one-way street) and UNDIRECTED (two-way stree)
  * If there is a path between every pair of verticies, it is called a CONNECTED graph.
  * A graph can also have cycles. ACYCLIC Graph === graph without cycles.

  node === vertex
  connection === edge

*/


class Node {
  constructor(value) {
    this.value = value;
    this.connections = [];
  }

  addConnection(dest) {
    this.connections.push(dest);
  }
}

class Graph {
  constructor(numVertices) {
    this.graph = {};
    this.numVertices = numVertices;
  }

  addVertex(value) {
    const vertex = new Node(value);
    this.graph[value] = vertex;
    return this.graph[value];
  }

  addEdge(src, destination) {
    this.graph[src].addConnection(destination);
    this.graph[destination].addConnection(src);
    return this.graph;
  }

  printGraph() {
    console.log(this.graph);
  }

  // breadthFirstSearch(startingNode) {
  //   const visited = [];
  //   for (let i = 0; i < this.numVertices; i++) visited[i] = false;
  // }
}


/*************************************************************/


const g = new Graph(7); 
const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// adding vertices 
vertices.forEach(vert => g.addVertex(vert));
  
// adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 
  
// print graph
g.printGraph(); 