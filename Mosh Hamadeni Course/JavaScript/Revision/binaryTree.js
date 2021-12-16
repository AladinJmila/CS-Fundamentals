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

  height = () => {
    return this.mamaMole(this.root);
  };

  mamaMole = root => {
    if (!root) return -1;
    if (this.isRootEnd(root)) return 0;
    const babyMole = this.mamaMole;

    return 1 + Math.max(babyMole(root.lefthChild), babyMole(root.rightChild));
  };

  min = root => {
    return this.MammaWarm(this.root);
  };

  MammaWarm = root => {
    if (this.isRootEnd(root)) return root.value;

    const babyWarm = this.MammaWarm;
    const one = babyWarm(root.leftChild);
    const two = babyWarm(root.rightChild);

    return Math.min(root.value, one, two);
  };

  isRootEnd = root => {
    return !root.leftChild && !root.rightChild;
  };
}

module.exports = BinaryTree;
