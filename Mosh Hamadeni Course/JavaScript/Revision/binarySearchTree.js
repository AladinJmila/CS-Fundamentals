class AVLTree {
  AVLNode = class {
    value = null;
    leftChild = null;
    rightChild = null;

    constructor(value) {
      this.value = value;
    }
  };

  root = null;

  // write a recurcive function that will insert nodes
  // return value:
  // if you find an null node you should insert the new node in its stead
  // if the node is not null, then check the children, if either of then is null it'll take the node,
  // otherwise, check their children and keep reapeating. The trick with this secnario is that
  // the creation of the node object will fail because it's not returned. We need an additional function
  // that will take whatever is returned from the recursive function and assing it to the root node every time

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(root, value) {
    if (root === null) {
      return new this.AVLNode(value);
    }

    if (value < root.value) {
      root.leftChild = this.insertNode(root.leftChild, value);
    } else {
      root.rightChild = this.insertNode(root.rightChild, value);
    }

    return root;
  }
}

const tree = new AVLTree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
