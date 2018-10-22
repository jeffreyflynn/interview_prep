class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addVertex(val) {
    this.nodes.push(val);
  }

  addEdge(v1, v2) {
    if (this.edges[v1]) {
      this.edges[v1].push(v2);
    } else {
      this.edges[v1] = [v2]
    }
  }

  printGraph() {
    let result = "\n";

    Object.keys(this.edges).forEach(node => {
      result += node + " -> ";

      if (this.edges[node]) {
        this.edges[node].forEach(edge => result += edge + " ");
      }

      result += "\n"
    });

    console.log(result);
  }

  BFS() {
    const queue = [this.nodes[0]];
    const visited = {};

    while (queue.length) {
      const node = queue.shift();

      if (this.edges[node]) {
        this.edges[node].forEach(edge => {
          if (!visited[edge]) {
            queue.push(edge);
            visited[edge] = true;
          }
        });
      }

      console.log(node);
    }
  }

  DFS(node=this.nodes[0], visited={}) {
    if (node === undefined || visited[node]) return;
    
    console.log(node);

    visited[node] = true;

    if (this.edges[node]) {
      this.edges[node].forEach(edge => {
        if (!visited[edge]) {
          this.DFS(edge, visited);
        }
      });
    }
  }

}


const g = new Graph();

g.addVertex(0)
g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(4)
g.addVertex(5)

g.addEdge(0, 1)
g.addEdge(0, 4)
g.addEdge(0, 5)
g.addEdge(1, 3)
g.addEdge(1, 4)
g.addEdge(2, 1)
g.addEdge(3, 2)
g.addEdge(3, 4)

g.printGraph()

g.BFS()
console.log()
g.DFS()