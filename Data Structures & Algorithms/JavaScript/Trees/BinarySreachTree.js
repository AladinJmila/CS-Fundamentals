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
    // console.log(this.root);
  }

  find(value) {
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      } else return true;
    }
    return false;
  }

  traversePreOrder(root = this.root) {
    if (root === null) return;

    console.log(root.value);
    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);
  }
  traverseInOrder(root = this.root) {
    if (root === null) return;

    this.traverseInOrder(root.leftChild);
    console.log(root.value);
    this.traverseInOrder(root.rightChild);
  }

  traversePostOrder(root = this.root) {
    if (root === null) return;

    this.traversePostOrder(root.leftChild);
    this.traversePostOrder(root.rightChild);
    console.log(root.value);
  }

  isLeaf(root) {
    return root.leftChild === null && root.rightChild === null;
  }

  height(root = this.root) {
    if (root === null) return -1;

    // if (this.isLeaf(root)) return 0;
    if (this.isLeaf(root)) return 0;

    return (
      1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
    );
  }

  min(root = this.root) {
    if (this.isLeaf(root)) return root.value;

    let left = this.min(root.leftChild);
    let right = this.min(root.rightChild);

    return Math.min(left, right, root.value);
  }

  minBST() {
    if (this.root === null) throw new Error('The tree should not be empty.');

    let current = this.root;
    let last = current;
    while (current !== null) {
      last = current;
      current = current.leftChild;
    }
    return last.value;
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

  levelOrderTraversal(root = this.root) {
    for (let i = 0; i <= this.height(); i++) {
      console.log(this.getNodesAtDistance(i, root));
    }
  }

  /* I  need to return to children count of each node
  pre-order traversal: because first we will check the root, if it's not null we increment the count by 1
  */

  size(root = this.root) {
    if (root === null) return 0;

    return 1 + this.size(root.leftChild) + this.size(root.rightChild);
  }

  /* 
  I needed to compute the size of the left tree, then the size of the right tree and add them together
  needed to see if the root is null then I would return zero, otherwise, I would return 1 + the size of the left tree and the size of the right tree

  first I need to see how many leaves each are on the left side and how many on the right then add them togerther
  so I go to the left and see if it's leave I return 0 + 
   */
  countLeaves(root = this.root) {
    if (root === null) return 0;

    if (this.isLeaf(root)) return 1;

    return this.countLeaves(root.leftChild) + this.countLeaves(root.rightChild);
  }
  /*
   The steps that I should have taken would be, first if the node is null I return 0, if it is a leafnode I return 1, else I need to recursively calaculate leaf count of binary tree using the formula: Leaf counf of a tree = Leaf count of left subtree + Leaf count of right subtree 
  */

  /*
   I need to visit every node from the bottom up and returning the max value in that subtree
   if the root node is null we simply return othwise we return the biggest of the root, letChild and rightChild
   */
  max(root = this.root) {
    if (this.isLeaf(root)) return root.value;

    let left = this.max(root.leftChild);
    let right = this.max(root.rightChild);

    return Math.max(root.value, left, right);
  }

  /*
  Implement a method contains that returns a boolean if the value exists
  base conditions: reached the and / found the value
  action: compare the node's value to the search value
  order: pre-order traversal
  */

  contains(search, root = this.root) {
    if (root === null) return false;
    if (root.value === search) return true;

    return (
      this.contains(search, root.leftChild) ||
      this.contains(search, root.rightChild)
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

  getAncestors(num, root = this.root) {
    if (root === null) return false;
    if (root.value === num) return true;
    let left = this.getAncestors(num, root.leftChild);
    let right = false;
    if (!left) right = this.getAncestors(num, root.rightChild);
    if (left || right) console.log(root.value);

    return left || right;
  }
}

const tree = new BinaryTree();
// tree.insert(7);
// tree.insert(4);
// tree.insert(9);
// tree.insert(1);
// tree.insert(6);
// tree.insert(8);
// tree.insert(10);

// const tree2 = new BinaryTree();
// tree2.insert(7);
// tree2.insert(4);
// tree2.insert(9);
// tree2.insert(1);
// tree2.insert(6);
// tree2.insert(8);
// tree2.insert(10);

// tree.traversePreOrder();
// tree.levelOrderTraversal();
// console.log(tree.getNodesAtDistance(2));
// console.log(tree.isBinarySearchTree());
// console.log(tree.size());
// tree.size();
// console.log(tree.contains(0));
// tree.contains(1);
// console.log(tree.areSiblings(1, 8));
// console.log(tree.getAncestors([1, 6, 8]));
// console.log(tree.getAncestors([1, 10, 4]));
// tree.getAncestors(1);
