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

  traverseDepthFirstPub = root => {
    const node = this.nodes[root];
    if (!node) return;
    this.traverseDepthFirstPri(node, new Set());
  };

  traverseDepthFirstPri = (root, visited) => {
    console.log(root.label);
    visited.add(root.label);

    for (let neighbour of this.adjacencyList[root.label]) {
      if (!visited.has(neighbour)) {
        this.traverseDepthFirstPri(this.nodes[neighbour], visited);
      }
    }
  };

  traverseDepthFirstIter = label => {
    if (!this.nodes[label]) return;

    const visited = new Set();
    const stack = [];
    stack.push(label);

    while (stack.length) {
      let current = stack.pop();

      // if (visited.has(current)) continue;

      console.log(current);
      visited.add(current);

      for (let neighbour of this.adjacencyList[current]) {
        if (!visited.has(neighbour)) stack.push(neighbour);
      }
    }
  };

  traverseBreadthFirst = node => {
    if (!this.nodes[node]) return;

    const queue = [];
    const visited = new Set();

    queue.push(node);

    while (queue.length) {
      let current = queue.shift();

      console.log(current);
      visited.add(current);

      for (let neighbour of this.adjacencyList[current]) {
        if (!visited.has(neighbour)) queue.push(neighbour);
      }
    }
  };

  topologicalSortPub = node => {
    if (!this.nodes[node]) return;
    const stack = [];
    this.topologicalSortPri(node, new Set(), stack);
    return stack.reverse();
  };

  topologicalSortPri = (node, visited, stack) => {
    for (let neighbour of this.adjacencyList[node]) {
      if (!visited.has(neighbour)) {
        this.topologicalSortPri(neighbour, visited, stack);
      }
    }

    visited.add(node);
    stack.push(node);
  };

  hasCyclePub = () => {
    const all = new Set();
    Object.keys(this.nodes).forEach(node => all.add(node));

    const visiting = new Set();
    const visited = new Set();

    while (all.size) {
      for (let node of [...all]) {
        const result = this.hasCyclePri(node, all, visiting, visited);
        if (result) return true;
      }
    }

    return false;
  };

  hasCyclePri = (node, all, visiting, visited) => {
    all.delete(node);
    visiting.add(node);

    for (let neighbour of this.adjacencyList[node]) {
      if (visited.has(neighbour)) continue;

      if (visiting.has(neighbour)) return true;

      const result = this.hasCyclePri(neighbour, all, visiting, visited);
      if (result) return true;
    }

    visiting.delete(node);
    visited.add(node);

    return false;
  };
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');

console.log(graph.hasCyclePub());
