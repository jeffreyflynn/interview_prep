/* GRAPHS *//*

A graph is a collection of nodes with edges between them.

    | A |  ---------  | B |

        * A and B are verticies i.e. nodes.
        * The line connecting A and B is called an edge i.e. connection.

  
*/


class Node {
  constructor(value) {
    this.value = value;
    this.edges = {};
  }
}


class Graph {
  constructor() {
    this.verticies = {};
  }

  addVertex(val) {
    if (!this.verticies[val]) {
      this.verticies[val] = new Node(val);
    }
  }

  addEdge(x, y) {
    
  }
}