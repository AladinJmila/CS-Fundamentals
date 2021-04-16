queue = [10, 20, 30]
stack = []
def reverse_queue(queue):
  while queue:
    stack.append(queue.pop(0))
  while stack:
    queue.append(stack.pop())
  return queue

# print(reverse_queue(queue))

class ArrayQueue():
  def __init__(self, capacity):
    self.capacity = capacity
    self.queue = [0 for i in range(self.capacity)]
  
  count = 0
  front = 0
  rear = 0

  def is_full(self):
    if self.count == self.capacity: return True
    return False

  def is_empty(self):
    if self.count == 0: return True
    return False

  def enqueue(self, item):
    if self.is_full(): raise Exception('Queue is Full!')

    self.queue[self.rear] = item
    self.count += 1
    self.rear = (self.rear + 1) % self.capacity

  def dequeue(self):
    if self.is_empty(): raise Exception('Queue is Empty!')

    item = self.queue[self.front]
    self.queue[self.front] = 0
    self.front = (self.front + 1) % self.capacity
    self.count -= 1
    return item
  
  def peek(self, index):
    while index > self.front and index < self.rear:
      return queue[index]

test_queue = ArrayQueue(5)
test_queue.enqueue(10)
test_queue.enqueue(20)
test_queue.enqueue(30)
test_queue.dequeue()
front = test_queue.dequeue()
test_queue.enqueue(40)
test_queue.enqueue(50)
test_queue.enqueue(60)
test_queue.enqueue(70)
test_queue.dequeue()
print(front)
print(test_queue.queue)
# print(test_queue.dequeue())
# print(test_queue.dequeue())
# print()

# print(test_queue.count)
# print(test_queue.rear)
# print(test_queue.front)


