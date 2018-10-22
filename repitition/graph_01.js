class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(val) {
    this.nodes.push(val);
  }

  addVertex(v1, v2) {
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

g.addNode(0)
g.addNode(1)
g.addNode(2)
g.addNode(3)
g.addNode(4)
g.addNode(5)

g.addVertex(0, 1)
g.addVertex(0, 4)
g.addVertex(0, 5)
g.addVertex(1, 3)
g.addVertex(1, 4)
g.addVertex(2, 1)
g.addVertex(3, 2)
g.addVertex(3, 4)

g.printGraph()

g.BFS()
console.log()
g.DFS()