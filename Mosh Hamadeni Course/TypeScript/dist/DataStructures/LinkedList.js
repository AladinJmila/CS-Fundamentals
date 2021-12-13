class MyNode {
    // private next: MyNode;
    constructor(value) {
        this.value = value;
    }
}
export default class LinkedList {
    // private first: MyNode;
    // private last: MyNode;
    addLast(item) {
        const node = new MyNode(item);
        // console.log(node);
        // console.log(this.first);
        // console.log(this.last);
        // if (this.first === null) {
        //   this.first = node;
        //   this.last = node;
        // }
        console.log('this.first');
    }
}
