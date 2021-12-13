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
        if (this.isEmpty())
            this.first = this.last = node;
        if (this.last) {
            this.last.next = node;
            this.last = node;
        }
    }
    addFirst(item) {
        const node = new MyNode(item);
        if (this.isEmpty())
            this.first = this.last = node;
        else {
            node.next = this.first;
            this.first = node;
        }
    }
    isEmpty() {
        return !this.first;
    }
}
exports.default = LinkedList;
