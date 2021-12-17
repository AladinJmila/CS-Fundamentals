const Tree = require('./BinaryTree');

const tree = new Tree();

tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

tree.root.rightChild.value = 3;

console.log(tree.isValid());
