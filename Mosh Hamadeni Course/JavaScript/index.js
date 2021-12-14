const LinkedList = require('./LinkedListRev');

const list = new LinkedList();

// list.addLast(10);
// list.addLast(20);
// list.addLast(30);

console.log(list.toArray());
const result = list.getKthFromTheEnd(1);
console.log(result);
