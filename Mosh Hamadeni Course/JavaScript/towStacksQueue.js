const stack1 = [];
const stack2 = [];

// O(1)
function enqueue(item) {
  stack1.push(item);
}

// O(n)
function dequeue() {
  if (isEmpty()) throw new Error('Queue is empty.');
  if (!stack2.length) {
    while (stack1.length) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}

function isEmpty() {
  return !stack1.length && !stack2.length;
}

enqueue(10);
enqueue(20);
enqueue(30);
console.log(dequeue());
console.log(dequeue());
console.log(dequeue());

console.log(stack1);
console.log(stack2);
