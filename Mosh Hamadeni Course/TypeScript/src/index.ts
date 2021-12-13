import LinkedList from './DataStructures/LinkedList';

const list = new LinkedList();

console.log(list.getSize());

list.addLast(10);
list.addLast(20);
list.addLast(30);
console.log(list.getSize());
list.removeLast();
console.log(list.getSize());
