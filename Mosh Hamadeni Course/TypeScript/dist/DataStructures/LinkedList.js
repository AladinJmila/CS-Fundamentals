"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    }
    addLast(item) {
        const node = new MyNode(item);
        if (!this.first) {
            this.first = this.last = node;
        }
        if (this.last) {
            this.last.next = node;
            this.last = node;
        }
    }
}
exports.default = LinkedList;
