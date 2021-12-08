class WeigthedGraph {
  Node = class {
    constructor(label) {
      this.label = label;
      this.edges = [];
    }
    Edge = class {
      constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
      }
    };

    addEdge(to, weight) {
      this.edges.push(new this.Edge(this, to, weight));
    }

    getEdges() {
      return this.edges;
    }
  };

  nodes = {};

  addNode = label => {
    if (!label) throw new Error('Label must have a value.');
    !this.nodes[label] && (this.nodes[label] = new this.Node(label));
  };

  addEdge = (from, to, weight) => {
    if (!this.nodes[from]) throw new Error('Node not found');
    if (!this.nodes[to]) throw new Error('Node not found');
    if (typeof weight !== 'number') throw new Error('Invalid weight value');

    this.nodes[from].addEdge(this.nodes[to], weight);
    this.nodes[to].addEdge(this.nodes[from], weight);
  };

  print = () => {
    for (let node of Object.values(this.nodes)) {
      let edges = node.getEdges();
      if (edges.length) {
        console.log(`${node.label} is connected to`, edges);
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
