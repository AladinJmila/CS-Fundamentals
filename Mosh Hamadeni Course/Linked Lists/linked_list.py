class LinkedList():

  class Node():
    next_node = None
    def __init__(self, value):
      self.value = value

  first = None
  last = None
  length = 0


  def add_last(self, item):
    self.node = self.Node(item)
    self.length += 1

    if self.is_empty():
      self.first = self.last = self.node
    else:
      self.last.next_node = self.node
      self.last = self.node

  def add_first(self, item):
    self.node = self.Node(item)
    self.length += 1

    if self.is_empty():
      self.first = self.last = self.node
    else:
      self.node.next_node = self.first
      self.first = self.node
  
  def is_empty(self):
    return self.first == None

  def index_of(self, item):
    self.index = 0
    self.current = self.first
    while self.current != None:
      if self.current.value == item:
        return self.index
      else:
        self.current = self.current.next_node
        self.index += 1
    else: return -1
    
  def contains(self, item):
    return self.index_of(item) != -1


linked_list = LinkedList()
linked_list.add_last(10)
linked_list.add_last(20)
linked_list.add_last(30)
linked_list.add_first(50)

# print(linked_list.first.value)
# print(linked_list.first.next_node.value)
# print(linked_list.last.value)
# print(linked_list.last.next_node)
# print(linked_list.length)
# print(linked_list.index_of(100))
print(linked_list.contains(100))