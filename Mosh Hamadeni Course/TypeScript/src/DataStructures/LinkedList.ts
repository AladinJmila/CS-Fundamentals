class MyNode {
  constructor(public value: number, public next: MyNode | null = null) {}
}

export default class LinkedList {
  private first: MyNode | null = null;
  private last: MyNode | null = null;

  public addLast(item: number): void {
    const node = new MyNode(item);

    if (!this.first) this.first = this.last = node;

    if (this.last) {
      this.last.next = node;
      this.last = node;
    }
  }

  public addFirst(item: number): void {
    const node = new MyNode(item);
    if (!this.first) this.first = this.last = node;
    else {
      node.next = this.first;
      this.first = node;
    }
    console.log(this.first);
  }
}
