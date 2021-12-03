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
    !this.adjacencyList[node] && (this.adjacencyList[node.label] = []);
  };

  addEdge = (from, to) => {
    const fromNode = this.nodes[from];
    if (!fromNode) throw new Error('Illegal Argument');

    const toNode = this.nodes[to];
    if (!toNode) throw new Error('Illegal Argument');

    this.adjacencyList[fromNode.label].push(toNode.label);
  };

  print = () => {
    for (let source in this.adjacencyList) {
      let target = this.adjacencyList[source];
      if (target.length) {
        console.log(`${source} is connected to`, target);
      }
    }
  };
}

const graph = new Graph();
graph.addNode('aladin');
graph.addNode('josipa');
graph.addNode('buba');
graph.addEdge('aladin', 'josipa');
graph.addEdge('aladin', 'buba');
graph.addEdge('josipa', 'buba');
graph.print();
