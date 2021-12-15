const LinkedList = require('./LinkedListRev');

const list = new LinkedList();

list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addLast(40);
list.addLast(50);
list.last.next = list.first.next;
// console.log(list.first);

// console.log(list.toArray());
const result = list.hasLoop();
console.log(result);
