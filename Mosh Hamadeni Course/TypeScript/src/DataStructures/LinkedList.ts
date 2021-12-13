class MyNode {
  constructor(public value: number, public next: MyNode | null = null) {}
}

export default class LinkedList {
  private first: MyNode | null = null;
  private last: MyNode | null = null;
  private size = 0;

  public addLast(item: number): void {
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

  public addFirst(item: number): void {
    const node = new MyNode(item);
    if (this.isEmpty()) this.first = this.last = node;
    else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
  }

  public indexOf(item: number): number {
    let index = 0;
    let current = this.first;
    while (current) {
      if (item === current.value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  public contains(item: number): boolean {
    return this.indexOf(item) !== -1;
  }

  public removeFirst(): void {
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

  public removeLast(): void {
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

  public getSize(): number {
    return this.size;
  }

  private getPrevious(node: MyNode): MyNode | null {
    let current = this.first;
    while (current) {
      if (current.next === node) return current;
      current = current.next;
    }

    return null;
  }

  private isEmpty(): boolean {
    return !this.first;
  }

  public toArray(): number[] {
    const array: number[] = [];

    let current = this.first;
    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  public reverse(): void {
    let previous = this.first;
    let current = this.first?.next;

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
}
