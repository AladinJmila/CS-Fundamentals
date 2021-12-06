class Graph {
  Node = class {
    constructor(label) {
      this.label = label;
    }
  };

  nodes = {};
  adjacencyList = {};

  addNode = label => {
    const node = new this.Node(label);
    !this.nodes[label] && (this.nodes[label] = node);
    !this.adjacencyList[node.label] && (this.adjacencyList[node.label] = []);
  };

  addEdge = (from, to) => {
    if (!this.nodes[from]) throw new Error('Illegal Argument');

    if (!this.nodes[to]) throw new Error('Illegal Argument');

    this.adjacencyList[from].push(to);
  };

  print = () => {
    for (let source in this.adjacencyList) {
      let target = this.adjacencyList[source];
      if (target.length) {
        console.log(`${source} is connected to`, target);
      }
    }
  };

  removeNode = label => {
    if (!this.nodes[label]) return;

    for (let value of Object.values(this.adjacencyList)) {
      let index = value.indexOf(label);
      if (index !== -1) {
        value.splice(index, 1);
      }
    }

    delete this.adjacencyList[label];
    delete this.nodes[label];
  };

  removeEdge = (from, to) => {
    if (!this.nodes[from] || !this.nodes[to]) return;

    const index = this.adjacencyList[from].indexOf(to);
    if (index !== -1) {
      this.adjacencyList[from].splice(index, 1);
    }
  };
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.removeNode('A');
graph.addEdge('B', 'C');
graph.print();
