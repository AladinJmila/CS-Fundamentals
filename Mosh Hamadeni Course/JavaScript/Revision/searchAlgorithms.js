function binarySearchRec(array, target, left = 0, right = array.length - 1) {
  if (right < left) return -1;

  let middle = parseInt((left + right) / 2);

  if (array[middle] === target) return middle;

  if (target < array[middle]) {
    return binarySearchRec(array, target, left, middle - 1);
  }

  return binarySearchRec(array, target, middle + 1, right);
}

function binarySearchIter(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = parseInt((left + right) / 2);

    if (array[middle] === target) return middle;

    if (target < array[middle]) right = middle - 1;
    else left = middle + 1;
  }

  return -1;
}

function ternarySearch(array, target, left = 0, right = array.length - 1) {
  if (left > right) return -1;

  let partitionSize = parseInt((right - left) / 3);
  let mid1 = left + partitionSize;
  let mid2 = right - partitionSize;

  if (array[mid1] === target) return mid1;
  if (array[mid2] === target) return mid2;

  if (target < array[mid1]) {
    return ternarySearch(array, target, left, mid1 - 1);
  }
  if (target > array[mid2]) {
    return ternarySearch(array, target, mid2 + 1, right);
  }

  return ternarySearch(array, target, mid1 + 1, mid2 - 1);
}

function jumpSearch(array, target) {
  let blockSize = parseInt(Math.sqrt(array.length));
  let start = 0;
  let next = blockSize;

  while (start < array.length && array[next - 1] < target) {
    start = next;

    next += blockSize;
    if (next > array.length) next = array.length;
  }

  for (let i = start; i < next; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

function exponentialSearch(array, target) {
  let bound = 1;

  while (bound < array.length && array[bound] < target) {
    bound *= 2; // bound = bound * 2
  }

  let left = parseInt(bound / 2);
  let right = Math.min(bound, array.length - 1);
  // let right = bound < array.length ? bound : array.length - 1;

  return binarySearchRec(array, target, left, right);
}

const array = [1, 3, 5, 6, 7];
// const array = [1, 3];
// const array = [1];
// const array = [];

console.log(exponentialSearch(array, 7));
