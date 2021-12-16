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

  min = () => {
    return this.mammaRabbit(this.root);
  };

  mammaWarm = root => {
    if (this.isRootEnd(root)) return root.value;

    const babyWarm = this.mammaWarm;
    const one = babyWarm(root.leftChild);
    const two = babyWarm(root.rightChild);

    return Math.min(root.value, one, two);
  };

  mammaRabbit = root => {
    if (this.isRootEnd(root)) return root.value;
    const babyRabbit = this.mammaRabbit;
    return babyRabbit(root.leftChild);
  };

  isEqual = tree => {
    return this.mammaSnake(this.root, tree.root);
  };

  mammaSnake = (rootOne, rootTwo) => {
    if (!rootOne && !rootTwo) return true;
    if (!rootOne || !rootTwo) return false;
    const babySnake = this.mammaSnake;

    const compaBabeOne = babySnake(rootOne.leftChild, rootTwo.leftChild);
    const compaBabeTwo = babySnake(rootOne.rightChild, rootTwo.rightChild);

    let compaMum = false;
    if (rootOne.value === rootTwo.value) compaMum = true;

    return compaMum && compaBabeOne && compaBabeTwo;
  };

  isRootEnd = root => {
    return !root.leftChild && !root.rightChild;
  };
}

module.exports = BinaryTree;
