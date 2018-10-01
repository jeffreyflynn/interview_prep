// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
// directed graph i.e. each node can only point to one other node


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }
}