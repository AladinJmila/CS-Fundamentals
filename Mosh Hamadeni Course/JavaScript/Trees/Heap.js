class Heap {
  items = [];
  size = 0;

  insert(value) {
    this.items[this.size++] = value;

    this.bubbleUp();
  }

  remove() {
    if (this.isEmpty()) throw new Error('Heap is empty.');

    let root = this.items[0];
    this.items[0] = this.items[--this.size];

    this.bubbleUp();

    return root;
  }

  bubbleDown() {
    let index = 0;
    while (index <= this.size && !this.isValidParent(index)) {
      let largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  largerChildIndex(index) {
    if (!this.hasLeftChild(index)) return index;

    if (!this.hasRightChild(index)) return this.leftChildIndex(index);

    return this.leftChild(index) > this.rightChild(index)
      ? this.leftChildIndex(index)
      : this.rightChildIndex(index);
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) <= this.size;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) <= this.size;
  }

  isValidParent(index) {
    if (!this.hasLeftChild(index)) return true;

    if (!this.hasRightChild(index))
      return this.items[index] >= this.leftChild(index);

    return (
      this.items[index] >= this.leftChild(index) &&
      this.items[index] >= this.rightChild(index)
    );
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  leftChildIndex(index) {
    return parseInt(index * 2 + 1);
  }

  rightChildIndex(index) {
    return parseInt(index * 2 + 2);
  }

  bubbleUp() {
    let index = this.size - 1;

    while (index > 0 && this.items[index] > this.items[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  parent(index) {
    return parseInt((index - 1) / 2);
  }

  swap(first, second) {
    let temp = this.items[first];
    this.items[first] = this.items[second];
    this.items[second] = temp;
  }
}

const heap = new Heap();

heap.insert(10);
heap.insert(5);
heap.insert(17);
heap.insert(4);
heap.insert(22);
heap.remove();
