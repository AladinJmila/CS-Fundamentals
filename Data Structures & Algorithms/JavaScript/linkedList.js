class LinkedList {
  Node = class {
    value;
    next = null;
    constructor(value) {
      this.value = value;
    }
  };

  first;
  last;
  length = 0;

  // addLast
  addLast(item) {
    const node = new this.Node(item);
    // console.log(node);

    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    // console.log(this.first);
    // console.log(this.last);
    this.length++;
  }

  // addFirst
  addFirst(item) {
    const node = new this.Node(item);

    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    console.log(this.first);
    console.log(this.last);
    this.length++;
  }

  // assAt
  addAt(item, index) {
    if (index > this.length) throw new Error('Index out of range');

    const node = new this.Node(item);
    let before;
    let current = this.first;
    for (let i = 0; i < this.length; i++) {
      if (i === index - 1) {
        before = current;
      }
      if (i === index) {
        before.next = node;
        node.next = current;
        break;
      }
      current = current.next;
    }
    this.length++;
    console.log(this.first);
    // console.log(this.length);
  }

  // deleteFirst

  deleteFirst() {
    if (this.length === 0) throw new Error('Linked list is empty');

    const second = this.first.next;
    this.first.next = null;
    this.first = second;
    this.length--;
    console.log(this.first);
  }

  // deleteLast
  deleteLast() {
    let current = this.first;

    for (let i = 2; i < this.length; i++) {
      current = current.next;

      if (i === this.length - 1) {
        this.last = current;
        this.last.next = null;
      }
    }
    this.length--;
    console.log(this.first);
    console.log(this.last);
  }

  // contains
  // indexOf

  isEmpty() {
    return this.first === undefined;
  }
}

const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addFirst(-10);
// list.addAt(100, 1);
// list.deleteFirst();
list.deleteLast();
