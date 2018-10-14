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
    this.root = null;
  }

  // O(1)
  add_vertex(val) {
    const newnode = new Node(val);

    if (!this.root) {
      this.root = newnode;
      this.verticies[val] = newnode;
    }

    else if (!this.verticies[val]) {
      this.verticies[val] = newnode;
    } 
    
    else {
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

  reset_visited() {
    for (let v in this.verticies) {
      this.verticies[v].visited = false;
    }
  }

  BFS_iterative() {
    const queue = [this.root];

    this.verticies[this.root.value].visited = true;

    while (queue.length > 0) {
      const node = queue.shift();
      console.log(`\nvisited ~ ${node.value}\n`);

      for (let v in node.edges) {
        if (!this.verticies[v].visited) {
          this.verticies[v].visited = true;
          queue.push(this.verticies[v]);
        }
      }
    }
    
    this.reset_visited();
  }

  DFS(node=this.root) {
    if (node === null) return;

    console.log(`\nvisited ~ ${node.value}\n`);
    node.visited = true;
    
    for (let v in node.edges) {
      if (!this.verticies[v].visited) this.DFS(this.verticies[v]);
    }
  }

  // DFS_iterative() { // 0 1 3 2 4 5
  //   const stack = [], visited = [];

  //   stack.push(this.root);

  //   while (stack.length) {
  //     const node = stack.shift();

  //     visited[node.value] = true;

  //     if (Object.keys(node.edges)[0])

  //     for (let v in node.edges) {
  //       if (!visited[v]) {
  //         stack.push(this.verticies[v]);
  //         // console.log(stack)
  //       }
  //     }
  //     console.log(`\nvisited ~ ${node.value}`);
  //   }

  //   this.reset_visited();
  // }

  // BFS(node=this.verticies[0]) {
  //   const stack = [];
  //   let n;

  //   while (stack.length > 0) {
  //     n = stack.pop();
  //     console.log(`\nvisited ~ ${n.value}\n`);


  //   }
  // }

  printGraph() {
    for (let v in this.verticies) {
      console.log(`${v}  ~  ${Object.keys(this.verticies[v].edges)}`);
    }
  }
}


// **************************************************


const g = new Graph();

g.add_vertex(0);
g.add_vertex(1);
g.add_vertex(2);
g.add_vertex(3);
g.add_vertex(4);
g.add_vertex(5);

g.add_edge(0, 1);
g.add_edge(0, 4);
g.add_edge(0, 5);
g.add_edge(1, 3);
g.add_edge(1, 4);
g.add_edge(2, 1);
g.add_edge(3, 2);
g.add_edge(3, 4);

// g.printGraph();

// g.DFS(); // 0 1 3 2 4 5

// g.printGraph();

g.BFS_iterative(); // 0 1 4 5 3 2

g.printGraph();

g.DFS_iterative(); // 0 1 3 2 4 5