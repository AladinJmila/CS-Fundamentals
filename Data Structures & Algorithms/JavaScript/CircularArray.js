function javaArray(length) {
  const array = new Array(length);
  for (let i = 0; i < length; i++) array[i] = 0;
  return array;
}

const array = javaArray(5);
console.log(array);

let rear = 0;
let count = 0;

function insertItem(item) {
  if (count === array.length) throw new Error('Stack is full');
  array[rear] = item;
  rear = (rear + 1) % array.length;
  count++;
}

let front = 0;

function removeItem() {
  const item = array[front];
  array[front] = 0;
  front = (front + 1) % array.length;
  count--;

  return item;
}

insertItem(10);
insertItem(20);
insertItem(30);
removeItem();
insertItem(40);
insertItem(50);
console.log(count);
insertItem(60);
// removeItem();

console.log(array);
