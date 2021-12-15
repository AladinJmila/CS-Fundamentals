class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  root = null;

  insert = value => {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.leftChild) {
          current.leftChild = node;
          return;
        }
        current = current.leftChild;
      }

      if (value > current.value) {
        if (!current.rightChild) {
          current.rightChild = node;
          return;
        }

        current = current.rightChild;
      }
    }
  };

  find = value => {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      }
    }
    return false;
  };
}

module.exports = BinaryTree;
