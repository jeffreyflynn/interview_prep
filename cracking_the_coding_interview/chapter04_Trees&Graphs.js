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
