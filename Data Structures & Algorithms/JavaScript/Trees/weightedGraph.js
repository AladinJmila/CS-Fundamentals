class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

_hasCycle = (node, parent, visited) => {
  visited.add(node.label);

  for (let edge of node.getEdges()) {
    if (parent && edge.to.label === parent.label) continue;

    if (visited.has(edge.to.label) || _hasCycle(edge.to, node, visited))
      return true;
  }

  return false;
};

class WeigthedGraph {
  Node = class {
    constructor(label) {
      this.label = label;
      this.edges = [];
    }

    addEdge(to, weight) {
      this.edges.push(new Edge(this, to, weight));
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

  hasCycle = () => {
    const visited = new Set();
    for (let node of Object.values(this.nodes)) {
      if (!visited.has(node.label) && _hasCycle(node, null, visited))
        return true;
    }

    return false;
  };
}

module.exports = WeigthedGraph;
