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

  add_vertex(val) {
    if (!this.verticies[val]) {
      this.verticies[val] = new Node(val);
    } else {
      return null;
    }
  }

  // edge is similar to an arrow - leads from one node to another
  add_directed_edge(from_value, to_value) {
    let newnode;

    if (!this.verticies[from_value]) {
      newnode = new Node(from_value);
      this.verticies[from_value] = newnode;
    }

    if (!this.verticies[to_value]) {
      newnode = new Node(to_value);
      this.verticies[to_value] = newnode;
    }

    this.verticies[from_value].edges.push(to_value);
  }

  remove_vertex(val) {
    if (!this.verticies[val]) return null;
    delete this.verticies[val];
    return;
  }

  printGraph() {
    const res = JSON.stringify(this.verticies);
    console.log(`\n\n ${res} \n\n`);
  }
}


// **************************************************

const g = new Graph();

g.add_vertex(1);
g.add_vertex(2);
g.add_vertex(3);

g.add_directed_edge(1, 2);
g.add_directed_edge(2, 3);
g.add_directed_edge(3, 1);

g.printGraph();