class AVLTree {
  AVLNode = class {
    height = 0;
    value = null;
    leftChild = null;
    rightChild = null;

    constructor(value) {
      this.value = value;
    }
  };

  root = null;

  insert = value => {
    this.root = this.insertNode(this.root, value);
  };

  insertNode = (root, value) => {
    if (root === null) {
      return new this.AVLNode(value);
    }

    if (value < root.value) {
      root.leftChild = this.insertNode(root.leftChild, value);
    } else {
      root.rightChild = this.insertNode(root.rightChild, value);
    }

    this.setHeight(root);

    root = this.balance(root);

    return root;
  };

  balance = root => {
    if (this.isLeftHeavy(root)) {
      if (this.balanceFactor(root.leftChild) < 0) {
        root.leftChild = this.rotateLeft(root.leftChild);
      }
      return this.rotateRight(root);
    } else if (this.isRightHeavy(root)) {
      if (this.balanceFactor(root.rightChild) > 0) {
        root.rightChild = this.rotateRight(root.rightChild);
      }
      return this.rotateLeft(root);
    }

    return root;
  };

  rotateLeft = root => {
    let newRoot = root.rightChild;

    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  };

  rotateRight = root => {
    let newRoot = root.leftChild;

    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  };

  setHeight = node => {
    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
  };

  isLeftHeavy = node => {
    return this.balanceFactor(node) > 1;
  };

  isRightHeavy = node => {
    return this.balanceFactor(node) < -1;
  };

  balanceFactor = node => {
    return node === null
      ? 0
      : this.height(node.leftChild) - this.height(node.rightChild);
  };

  height = node => {
    return node === null ? -1 : node.height;
  };
}

const tree = new AVLTree();
tree.insert(10);
tree.insert(30);
tree.insert(20);
