const LinkedList = require('./LinkedListRev');

const list = new LinkedList();

// list.addLast(10);
// list.addLast(20);
// list.addLast(30);
// list.addLast(40);
// list.addLast(50);
// list.addLast(60);
// list.addLast(70);
// list.addLast(80);

console.log(list.toArray());
const result = list.printMiddle();
console.log(result);
