class AVLTree {
  AVLNode = class {
    height = null;
    value = null;
    leftChild = null;
    rightChild = null;
    constructor(value) {
      this.value = value;
    }
  };

  root = null;

  insert(value) {
    this.root = this.insertNode(this.root, value);
  }

  insertNode(root, value) {
    if (root === null) {
      let node = new this.AVLNode(value);
      node.height = 0;
      return node;
    }

    if (value < root.value) {
      root.leftChild = this.insertNode(root.leftChild, value);
    } else {
      root.rightChild = this.insertNode(root.rightChild, value);
    }

    root = this.balance(root);

    root.height =
      Math.max(this.height(root.leftChild), this.height(root.rightChild)) + 1;

    return root;
  }

  balance(root) {
    if (this.isLeftHeavy(root)) {
      if (this.balanceFactor(root.leftChild) < 0) {
        // console.log('Left Rotate', root.leftChild.value);
        this.rotateLeft(root.leftChild);
      }
      // console.log('Right Rotate', root.value);
      return this.rotateRight(root);
    } else if (this.isRightHeavy(root)) {
      if (this.balanceFactor(root.rightChild) > 0) {
        console.log('Right Rotate', root.rightChild.value);
        this.rotateRight(root.rightChild);
      }
      console.log('Left Rotate', root.value);
      return this.rotateLeft(root);
    }
    return root;
  }

  rotateLeft(root) {
    let newRoot = root.rightChild;

    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  }

  rotateRight(root) {
    let newRoot = root.leftChild;

    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);

    return newRoot;
  }

  setHeight(node) {
    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
  }

  isLeftHeavy(node) {
    return this.balanceFactor(node) > 1;
  }

  isRightHeavy(node) {
    return this.balanceFactor(node) < -1;
  }

  balanceFactor(node) {
    return node === null
      ? 0
      : this.height(node.leftChild) - this.height(node.rightChild);
  }

  height(node) {
    return node === null ? -1 : node.height;
  }
}

const avlTree = new AVLTree();

avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(15);
avlTree.insert(30);
// avlTree.insert(40);
// avlTree.insert(10);
/*
 10
    20
  15   30 
 */
