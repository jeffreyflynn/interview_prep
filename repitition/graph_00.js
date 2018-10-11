/* GRAPHS *//*

A graph is a collection of nodes with edges between them.

    | A |  ---------  | B |

        * A and B are verticies i.e. nodes.
        * The line connecting A and B is called an edge i.e. connection.

  
*/


class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
  }
}


class Graph {
  constructor() {
    this.verticies = {};
  }

  addVertex(val) {
    if (!this.verticies[val]) {
      this.verticies[val] = new Node(val);
    } else {
      return null;
    }
  }

  addEdge(x_value, y_value) {
    let newnode;

    if (!this.verticies[x_value]) {
      newnode = new Node(x_value);
      this.verticies[x_value] = newnode;
    }

    if (!this.verticies[y_value]) {
      newnode = new Node(y_value);
      this.verticies[y_value] = newnode;
    }

    this.verticies[x_value].edges.push(y_value);
    this.verticies[y_value].edges.push(x_value);
  }

  printGraph() {
    const res = JSON.stringify(this.verticies);
    console.log(res);
  }
}


