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

  // O(1)
  add_vertex(val) {
    if (!this.verticies[val]) {
      this.verticies[val] = new Node(val);
    } else {
      return null;
    }
  }

  // O(1)
  get_vertex(val) {
    return this.verticies[val] ? this.verticies[val] : null;
  }

  // O(verticies)
  remove_vertex(val) {
    if (!this.verticies[val]) return null;

    delete this.verticies[val];

    for (let v in this.verticies) {
      if (this.verticies[v].edges[val]) {
        delete this.verticies[v].edges[val];
      }
    }
  }

  // O(1)
  add_edge(start, end) {
    let newnode;

    if (!this.verticies[start]) {
      newnode = new Node(start);
      this.verticies[start] = newnode;
    }

    if (!this.verticies[end]) {
      newnode = new Node(end);
      this.verticies[end] = newnode;
    }

    if (this.verticies[start].edges[end]) {
      this.verticies[start].edges[end].weight += 1;
    } else {
      this.verticies[start].edges[end] = { weight: 1 };
    }
  }

  // O(1)
  get_edge(start, end) {
    return this.verticies[start].edges[end] || null;
  }

  // O(1)
  remove_edge(start, end) {
    if (this.verticies[start] && this.verticies[end]) {
      if (this.verticies[start].edges[end]) {
        delete this.verticies[start].edges[end];
      }
    }
  }

  BFS(node=this.verticies[1]) {
    if (node === null) return;
    console.log(`\nvisited ~ ${node.value}\n`);
    node.visited = true;
    
    for (let v in node.edges) {
      if (!this.verticies[v].visited) this.BFS(this.verticies[v]);
    }
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

g.add_edge(1, 2);
g.add_edge(2, 3);
g.add_edge(3, 1);

g.printGraph();

g.BFS();

g.printGraph();