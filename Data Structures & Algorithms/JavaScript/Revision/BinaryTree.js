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
    if (this.hasNoChildren(root)) return 0;
    const babyMole = this.mamaMole;

    return 1 + Math.max(babyMole(root.lefthChild), babyMole(root.rightChild));
  };

  min = () => {
    return this.mammaRabbit(this.root);
  };

  mammaWarm = root => {
    if (this.hasNoChildren(root)) return root.value;

    const babyWarm = this.mammaWarm;
    const one = babyWarm(root.leftChild);
    const two = babyWarm(root.rightChild);

    return Math.min(root.value, one, two);
  };

  mammaRabbit = root => {
    if (this.hasNoChildren(root)) return root.value;
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

  isValid = () => {
    return this.mammaFox(
      this.root,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY
    );
  };

  mammaFox = (root, min, max) => {
    const babyFox = this.mammaFox;
    if (!root) return true;

    if (root.value < min || root.value > max) return false;

    return (
      babyFox(root.leftChild, min, root.value - 1) &&
      babyFox(root.rightChild, root.value + 1, max)
    );
  };

  nodeAtKthDistance = K => {
    const array = [];
    this.digger(this.root, K, array);
    console.log(array);
  };

  digger = (root, distance, array) => {
    if (!root) return;
    if (distance === 0) {
      array.push(root.value);
      return;
    }
    this.digger(root.leftChild, distance - 1, array);
    this.digger(root.rightChild, distance - 1, array);
  };

  hasNoChildren = root => {
    return !root.leftChild && !root.rightChild;
  };

  getSize = () => {
    console.log(this.counterRodent(this.root));
  };

  counterRodent = root => {
    if (!root) return 0;
    return (
      1 +
      this.counterRodent(root.leftChild) +
      this.counterRodent(root.rightChild)
    );
  };

  countLeaves = () => {
    console.log(this.counterSlug(this.root));
  };

  counterSlug = root => {
    if (!root) return 0;
    if (!root.leftChild && !root.rightChild) return 1;
    return this.counterSlug(root.leftChild) + this.counterSlug(root.rightChild);
  };
}

module.exports = BinaryTree;
