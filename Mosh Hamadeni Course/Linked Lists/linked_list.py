class LinkedList():
  '''Creates a Linked List Object'''
  class Node():
    
    def __init__(self, value):
      self.value = value
      self.next = None

  first = None
  last = None
  length = 0

  def _is_empty(self):
    return self.first == None

  def add_last(self, item):
    node = self.Node(item)
    self.length += 1

    if self._is_empty():
      self.first = self.last = node
    else:
      self.last.next = node
      self.last = node

  def add_first(self, item):
    node = self.Node(item)
    self.length += 1

    if self._is_empty():
      self.first = self.last = node
    else:
      node.next = self.first
      self.first = node     
    
  def index_of(self, item):
    index = 0
    current = self.first
    while current != None:
      if current.value == item:
        return index
      else:
        current = current.next
        index += 1
    else: return -1
    
  def contains(self, item):
    return self.index_of(item) != -1

  def remove_first(self):
    if self._is_empty():
      raise Exception('Linked list is Empty')

    elif self.first == self.last:
      self.first = self.last = None
    
    else:
      second = self.first.next
      self.first.next = None
      self.first = second

    self.length -= 1

  def remove_last(self):
    if self._is_empty():
      raise Exception('Linked-List is Empty.')

    elif self.first == self.last:
      self.first = self.last = None
      
    else:
      previous = self._get_previous(self.last)
      self.last = previous
      self.last.next = None
    
    self.length -= 1

  def _get_previous(self, node):
    current = self.first
    while current != None:
      if current.next == node:
        return current
      else:
        current = current.next
    
  def to_array(self):
    array = []
    current = self.first

    while current != None:
      array.append(current.value)
      current = current.next
    
    return array

  def reverse(self):
    if self._is_empty():
      return
     
    previous = self.first
    current = self.first.next

    while current != None:
      temp = current.next
      current.next = previous
      previous = current
      current = temp 

    self.last = self.first
    self.last.next = None
    self.first = previous



linked_list = LinkedList()
linked_list.add_last(10)
linked_list.add_last(20)
linked_list.add_last(30)
linked_list.add_first(5)
# linked_list.remove_first()
# linked_list.remove_last()

print(linked_list.first.value)
# print(linked_list.first.next.value)
print(linked_list.last.value)
# print(linked_list.last.next)
print(linked_list.length)
print(linked_list.to_array())
linked_list.reverse()
print(linked_list.to_array())
# print(linked_list.index_of(100))
# print(linked_list.contains(100))
