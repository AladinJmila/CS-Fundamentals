import LinkedList from './DataStructures/LinkedList';

const list = new LinkedList();

list.addLast(10);
// list.addLast(20);
// list.addLast(30);
list.reverse();
console.log(list.toArray());
