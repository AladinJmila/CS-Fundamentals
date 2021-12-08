class WeigthedGraph {
  Node = class {
    constructor(label) {
      this.label = label;
    }
  };

  Edge = class {
    constructor(from, to, weight) {
      this.from = from;
      this.to = to;
      this.weight = weight;
    }
  };

  nodes = {};
  adjacencyList = {};

  addNode = label => {
    if (!label) throw new Error('Label must have a value.');
    const node = new this.Node(label);
    !this.nodes[label] && (this.nodes[label] = node);
    !this.adjacencyList[label] && (this.adjacencyList[label] = []);
  };

  addEdge = (from, to, weight) => {
    if (!this.nodes[from]) throw new Error('Node not found');
    if (!this.nodes[to]) throw new Error('Node not found');
    if (typeof weight !== 'number') throw new Error('Invalid weight value');

    this.adjacencyList[from].push(new this.Edge(from, to, weight));
    this.adjacencyList[to].push(new this.Edge(to, from, weight));
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

const weightedGraph = new WeigthedGraph();
weightedGraph.addNode('A');
weightedGraph.addNode('B');
weightedGraph.addNode('C');
weightedGraph.addEdge('A', 'B', 3);
weightedGraph.addEdge('A', 'C', 2);
weightedGraph.print();
