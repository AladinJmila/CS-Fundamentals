class MyNode {
  constructor(public value: number, public next: MyNode | null = null) {}
}

export default class LinkedList {
  private first: MyNode | null = null;
  private last: MyNode | null = null;

  public addLast(item: number): void {
    const node = new MyNode(item);

    if (this.isEmpty()) this.first = this.last = node;

    if (this.last) {
      this.last.next = node;
      this.last = node;
    }
  }

  public addFirst(item: number): void {
    const node = new MyNode(item);
    if (this.isEmpty()) this.first = this.last = node;
    else {
      node.next = this.first;
      this.first = node;
    }
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
    let current = this.first;
    while (current) {
      if (item === current.value) return true;
      current = current.next;
    }
    return false;
  }

  private isEmpty(): boolean {
    return !this.first;
  }
}
