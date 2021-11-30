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

    this.bubbleDown();

    return root;
  }

  bubbleDown() {
    let index = 0;
    while (index < this.size && !this.isValidParent(index)) {
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

  max() {
    if (this.isEmpty()) throw new Error('Heap is empty.');

    return this.items[0];
  }
}

// const heap = new Heap();

// heap.insert(10);
// heap.insert(5);
// heap.insert(17);
// heap.insert(4);
// heap.insert(22);
// heap.remove();

const numbers = [5, 3, 10, 1, 4, 2];

const heap = new Heap();

// for (let number of numbers) {
//   heap.insert(number);
// }

// while (!heap.isEmpty()) {
//   console.log(heap.remove());
// }

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = heap.remove();
// }

// console.log(numbers);

// for (let i = numbers.length - 1; i >= 0; i--) {
//   numbers[i] = heap.remove();
// }

// console.log(numbers);

class PriorityQueueWithHeap {
  heap = new Heap();

  enqueue = item => heap.insert(item);
  dequeue = () => heap.remove();
  isEmpty = () => heap.isEmpty();
}

// const priorityQueue = new PriorityQueueWithHeap()

const numbers2 = [5, 3, 8, 4, 1, 2];

const heapify = array => {
  let lastParentIndex = parseInt(array.length / 2 - 1);
  for (let i = lastParentIndex; i >= 0; i--) {
    doHeapify(array, i);
  }
};

const doHeapify = (array, index) => {
  let largerIndex = index;
  let leftIndex = index * 2 + 1;

  if (leftIndex < array.length && array[leftIndex] > array[largerIndex]) {
    largerIndex = leftIndex;
  }

  let rightIndex = index * 2 + 2;
  if (rightIndex < array.length && array[rightIndex] > array[largerIndex]) {
    largerIndex = rightIndex;
  }

  if (index === largerIndex) return;

  swap(array, index, largerIndex);
  doHeapify(array, largerIndex);
};

const swap = (array, first, second) => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;
};

// heapify(numbers2);
// console.log(numbers2);

const getKthLargest = (array, k) => {
  if (k < 1 || k > array.length) throw new Error('Illegal Argument Exception');

  const heap = new Heap();

  for (item of array) {
    heap.insert(item);
  }

  for (let i = 0; i < k - 1; i++) {
    heap.remove();
  }

  return heap.max();
};

console.log(getKthLargest(numbers2, 6));
