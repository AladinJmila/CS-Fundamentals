
# Reversing a queue using a stack.
queue = [10, 20, 30]
stack = []
def reverse_queue(queue):
  while queue:
    stack.append(queue.pop(0))
  while stack:
    queue.append(stack.pop())
  return queue

# print(reverse_queue(queue))

# Building a queue using a circular array.
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

# Building a queue using two stacks.
class StacksQueue():
  def __init__(self, capacity):
    self.capacity = capacity

  stack1 = []
  stack2 = []
  count = 0

  def enqueue(self, item):
    if self.count == self.capacity: raise Exception('Queue is full.')

    self.stack1.append(item)
    self.count += 1

  def dequeue(self):
    if self.count == 0: raise Exception('Queue is empty.')

    if not self.stack2:
      while self.stack1:
        self.stack2.append(self.stack1.pop())
    item = self.stack2.pop()

    self.count -= 1
    return item

# Building a priority queue.
class PriorityQueue():
  def __init__(self, capacity):
    self.capacity = capacity
    self.queue = [0 for i in range(capacity)]

  head = 0
  rear = 0
  count = 0


  def enqueue(self, item):
    if self.count == self.capacity: raise Exception('Queue is full.')
  
    if self.count == 0:
      self.queue[0] = item
    else:
      for i in range(self.head , self.rear):
        if item < self.queue[self.rear - i]:
          print(self.rear - i)
          print(self.queue[self.rear - i])
          self.queue[self.rear + 1 - i] = self.queue[self.rear - i]
        else:
          print('inside else')
          print(self.rear - 1 - i)
          self.queue[self.rear - i] = self.queue[self.rear - 1 - i]
          self.queue[self.rear - 1 - i] = item
    self.rear = (self.rear + 1) % self.capacity
    self.count += 1

    def dequeue(self):
      if self.count == 0: raise Exception('Queue is empty.')

      item = self.queue[self.head]
      self.queue[self.head] = 0
      self.head = (self.head + 1) % self.capacity
      self.count -= 1
      
      return item

test_queue = PriorityQueue(5)
test_queue.enqueue(3)
test_queue.enqueue(2)
test_queue.enqueue(7)
# test_queue.enqueue(9)

print(test_queue.queue)



    


  

