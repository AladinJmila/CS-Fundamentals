const WeightedGraph = require('./weightedGraph');

const weightedGraph = new WeightedGraph();
weightedGraph.addNode('A');
weightedGraph.addNode('B');
weightedGraph.addNode('C');
weightedGraph.addEdge('A', 'B', 0);
weightedGraph.addEdge('B', 'C', 0);
// weightedGraph.addEdge('C', 'A', 0);

console.log(weightedGraph.hasCycle());
