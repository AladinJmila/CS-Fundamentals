const WeightedGraph = require('./weightedGraph');

const weightedGraph = new WeightedGraph();
weightedGraph.addNode('A');
weightedGraph.addNode('B');
weightedGraph.addNode('C');
weightedGraph.addEdge('A', 'B', 3);
weightedGraph.addEdge('A', 'C', 2);
weightedGraph.print();
