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
  // I need two pointers, the first one will lead and at a certain point it will tag along the second one.
  // The first one holds a torch to look ahead to the next one in line, and the second looks within and
  // reports the value.
  // Let's imagine that they are two sisters playing square jumping, the older one starts starts first:
  // they need to find the value of the third square from the end.
  // The older sister jumps in the first sqaure, then the second, then when it jumps into the third, it calls the
  // younger sister to jump in the first square and now the space between them is 2 squares.
  // From then on, they will jump together at the same time until the first reachs a dead end. At that point
  // it will tell it's sister the report the number of the square she's standing at.

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

    while (olderSisAt !== this.last) {
      olderSisAt = olderSisAt.next;
      youngerSisAt = youngerSisAt.next;
    }
    // the loop will break when the older sis reached the last square
    // and that means the youger sis is at the right square

    return youngerSisAt.value;
  }

  // both the sisters start at the first square, the the first sister moves forward and the second moves half
  // the number of steps the first takes. If the first reached the end it asks it's sister to return its value

  printMiddle() {
    if (!this.fist) throw new Error('EmptyListException');

    let olderSisAt = this.first;
    let youngerSisAt = this.first;
    let prevYounger;
    let steps = 0;

    while (olderSisAt !== this.last) {
      olderSisAt = olderSisAt.next;
      prevYounger = youngerSisAt;
      steps++;
      for (let i = 0; i < parseInt(steps % 2); i++) {
        youngerSisAt = youngerSisAt.next;
      }
    }

    if (!parseInt(steps % 2)) return youngerSisAt.value;

    return [prevYounger.value, youngerSisAt.value];
  }
}

// Storify your algorithms with the simplest story possible, keep in mind that you will need to speak out your
// coding process, so get in the habit of talking it outloud.
// After coming up with the first story, see if you can tell it in a more efficient way reducing the tasks you
// need to perform of do it smarter

module.exports = LinkedList;
