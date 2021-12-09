function bubbleSort(array) {
  let isSorted;
  for (let i = 0; i < array.length; i++) {
    isSorted = true;
    for (let j = 1; j < array.length - i; j++) {
      if (array[j] < array[j - 1]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
        isSorted = false;
      }
      if (isSorted) return;
    }
  }
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
}

function mergeSort(array) {
  // base condition
  if (array.length < 2) return;
  // divide this array into half
  let middle = parseInt(array.length / 2);

  let left = [];
  for (let i = 0; i < middle; i++) {
    left[i] = array[i];
  }

  let right = [];
  for (let i = middle; i < array.length; i++) {
    right[i - middle] = array[i];
  }
  // sort each half
  mergeSort(left);
  mergeSort(right);
  // merge the results
  merge(left, right, array);
}

function merge(left, right, result) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result[k++] = left[i++];
    } else {
      result[k++] = right[j++];
    }
  }

  while (i < left.length) {
    result[k++] = left[i++];
  }

  while (j < right.length) {
    result[k++] = right[j++];
  }
}

function quickSort(array, start = 0, end = array.length - 1) {
  // return if array is empty or has a single item
  if (start >= end) return;

  let boundary = partition(array, start, end);

  quickSort(array, start, boundary - 1);
  quickSort(array, boundary + 1, end);
}

function partition(array, start, end) {
  let pivot = array[end];
  let boundary = start - 1;

  for (let i = start; i <= end; i++) {
    if (array[i] <= pivot) {
      // first thing we do is increment the value of boundary so there is no fear of
      // falling out of range
      boundary++;

      let temp = array[i];
      array[i] = array[boundary];
      array[boundary] = temp;
    }
  }

  return boundary;
}

function countingSort(array) {
  const counts = [];
  for (let item of array) {
    counts[item] === undefined ? (counts[item] = 1) : counts[item]++;
  }

  let nextIndex = 0;

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] !== undefined) {
      for (let j = 0; j < counts[i]; j++) {
        array[nextIndex++] = i;
      }
    }
  }
}

const array = [5, 3, 2, 5, 4, 4, 5];
