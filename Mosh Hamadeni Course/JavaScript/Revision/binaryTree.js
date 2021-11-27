class BinaryTree {
  Node = class {
    value = null;
    leftChild = null;
    rightChild = null;
    constructor(value) {
      this.value = value;
    }
  };

  root = null;

  insert(value) {
    const node = new this.Node(value);

    if (this.root === null) {
      this.root = node;
      return;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.leftChild === null) {
            current.leftChild = node;
            break;
          }
          current = current.leftChild;
        }

        if (value > current.value) {
          if (current.rightChild === null) {
            current.rightChild = node;
            break;
          }
          current = current.rightChild;
        }
      }
    }
  }

  find(value) {
    let current = this.root;

    while (current !== null) {
      if (current.value === value) return true;

      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      }
    }
    return false;
  }

  traversePreOrder(root = this.root, list = []) {
    if (root === null) return;

    list.push(root.value);
    this.traversePreOrder(root.leftChild, list);
    this.traversePreOrder(root.rightChild, list);

    return list;
  }

  traverseInOrder(root = this.root, list = []) {
    if (root === null) return;

    this.traverseInOrder(root.leftChild, list);
    list.push(root.value);
    this.traverseInOrder(root.rightChild, list);

    return list;
  }

  traversePostOrder(root = this.root, list = []) {
    if (root === null) return;

    this.traversePostOrder(root.leftChild, list);
    this.traversePostOrder(root.rightChild, list);
    list.push(root.value);

    return list;
  }

  isLeaf(root) {
    return root.leftChild === null && root.rightChild === null;
  }

  height(root = this.root) {
    if (root === null) return -1;

    if (this.isLeaf(root)) return 0;

    return (
      1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
    );
  }

  min(root = this.root) {
    if (this.isLeaf(root)) return root.value;

    let left = this.min(root.leftChild);
    let right = this.min(root.rightChild);

    return Math.min(root.value, left, right);
  }

  minBST() {
    let current = this.root;
    let last = current;
    while (true) {
      last = current;
      current = current.leftChild;
      if (current === null) return last.value;
    }
  }

  equals(first, second = this.root) {
    if (first === null && second === null) return true;

    if (first !== null && second !== null) {
      return (
        first.value === second.value &&
        this.equals(first.leftChild, second.leftChild) &&
        this.equals(first.rightChild, second.rightChild)
      );
    }

    return false;
  }

  isBinarySearchTree(
    root = this.root,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY
  ) {
    if (root === null) return true;

    if (root.value < min || root.value > max) return false;

    return (
      this.isBinarySearchTree(root.leftChild, min, root.value - 1) &&
      this.isBinarySearchTree(root.rightChild, root.value + 1, max)
    );
  }

  getNodesAtDistance(distance, root = this.root, array = []) {
    if (root === null) return;

    if (distance === 0) {
      array.push(root.value);
      return array;
    }

    this.getNodesAtDistance(distance - 1, root.leftChild, array);
    this.getNodesAtDistance(distance - 1, root.rightChild, array);
    return array;
  }

  getNodesAtDistance2(distance, root = this.root, depth = 0, array = []) {
    if (root === null) return;
    if (distance === depth) {
      array.push(root.value);
      return array;
    }

    this.getNodesAtDistance2(distance, root.leftChild, depth + 1, array);
    this.getNodesAtDistance2(distance, root.rightChild, depth + 1, array);
    return array;
  }

  levelOrderTraversal() {
    for (let i = 0; i <= this.height(); i++) {
      console.log(this.getNodesAtDistance2(i));
    }
  }

  size(root = this.root) {
    if (root === null) return 0;
    return 1 + this.size(root.leftChild) + this.size(root.rightChild);
  }

  countLeaves(root = this.root) {
    if (root === null) return 0;
    if (this.isLeaf(root)) return 1;

    return this.countLeaves(root.leftChild) + this.countLeaves(root.rightChild);
  }

  max(root = this.root) {
    if (this.isLeaf(root)) return root.value;

    let left = Number.NEGATIVE_INFINITY;
    let right = Number.NEGATIVE_INFINITY;
    if (root.leftChild !== null) {
      left = this.max(root.leftChild);
    }
    if (root.rightChild !== null) {
      right = this.max(root.rightChild);
    }
    return Math.max(root.value, left, right);
  }

  contains(value, root = this.root) {
    if (root === null) return false;
    if (root.value === value) return true;
    return (
      this.contains(value, root.leftChild) ||
      this.contains(value, root.rightChild)
    );
  }

  areSiblings(value1, value2, root = this.root) {
    if (root.leftChild === null || root.rightChild === null) return false;

    if (root.leftChild.value === value1 && root.rightChild.value === value2)
      return true;
    if (root.leftChild.value === value2 && root.rightChild.value === value1)
      return true;
    return (
      this.areSiblings(value1, value2, root.leftChild) ||
      this.areSiblings(value1, value2, root.rightChild)
    );
  }

  getAncestors(value, root = this.root) {
    if (root === null) return false;
    if (root.value === value) return true;
    let left = this.getAncestors(value, root.leftChild);
    let right = false;
    if (!left) right = this.getAncestors(value, root.rightChild);
    if (left || right) console.log(root.value);
    return left || right;
  }
}

const tree = new BinaryTree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

const result = tree.getAncestors(8);
// tree.levelOrderTraversal();
