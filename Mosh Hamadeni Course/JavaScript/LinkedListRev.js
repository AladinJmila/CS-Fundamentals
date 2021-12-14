class MyNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  addLast(item) {
    const node = new MyNode(item);
    if (this.isEmpty()) this.first = this.last = node;
    else {
      if (this.last) {
        this.last.next = node;
        this.last = node;
      }
      this.size++;
    }
  }
  addFirst(item) {
    const node = new MyNode(item);
    if (this.isEmpty()) this.first = this.last = node;
    else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
  }
  indexOf(item) {
    let index = 0;
    let current = this.first;
    while (current) {
      if (item === current.value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  contains(item) {
    return this.indexOf(item) !== -1;
  }
  removeFirst() {
    if (this.isEmpty()) throw new Error('NoSuchElementException');
    if (this.first === this.last) {
      this.first = this.last = null;
      this.size--;
      return;
    }
    if (this.first) {
      const second = this.first.next;
      this.first.next = null;
      this.first = second;
    }
    this.size--;
  }
  removeLast() {
    if (this.isEmpty()) throw new Error('NoSuchElementException');
    if (this.first === this.last) {
      this.first = this.last = null;
      this.size--;
      return;
    }
    let previous = null;
    this.last && (previous = this.getPrevious(this.last));
    this.last = previous;
    this.last && (this.last.next = null);
    this.size--;
  }
  getSize() {
    return this.size;
  }
  getPrevious(node) {
    let current = this.first;
    while (current) {
      if (current.next === node) return current;
      current = current.next;
    }
    return null;
  }
  isEmpty() {
    return !this.first;
  }
  toArray() {
    const array = [];
    let current = this.first;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
  reverse() {
    var _a;
    let previous = this.first;
    let current =
      (_a = this.first) === null || _a === void 0 ? void 0 : _a.next;
    console.log(this.first);
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.last = this.first;
    this.last && (this.last.next = null);
    this.first = previous;
    console.log(this.first);
  }
  getKthFromTheEnd(K) {
    let olderSisAt = this.first;
    let youngerSisAt;
    const spaceBetween = K - 1;

    if (!olderSisAt) throw new Error('EmptyListException');

    for (let i = 0; i < spaceBetween; i++) {
      if (!olderSisAt.next) throw new Error('IndexOutOfRangeException');
      olderSisAt = olderSisAt.next;
    }
    youngerSisAt = this.first;

    while (olderSisAt) {
      if (!olderSisAt.next) return youngerSisAt.value;
      olderSisAt = olderSisAt.next;
      youngerSisAt = youngerSisAt.next;
    }
  }
}
module.exports = LinkedList;
