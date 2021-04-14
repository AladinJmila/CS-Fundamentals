class LinkedList():
  '''Creates a Linked List Object.'''
  class Node():
    next_node = None
    def __init__(self, value):
      self.value = value

  first = None
  last = None
  length = 0

  def _is_empty(self):
    return self.first == None

  def add_last(self, item):
    self.node = self.Node(item)
    self.length += 1

    if self._is_empty():
      self.first = self.last = self.node
    else:
      self.last.next_node = self.node
      self.last = self.node

  def add_first(self, item):
    self.node = self.Node(item)
    self.length += 1

    if self._is_empty():
      self.first = self.last = self.node
    else:
      self.node.next_node = self.first
      self.first = self.node

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

  def remove_first(self):
    if self._is_empty():
      raise Exception('Linked List is empty.')
    elif self.first == self.last:
      self.first = self.last = None
    else:
      self.second = self.first.next_node
      self.first.next_node = None
      self.first = self.second
    
    self.length -= 1

  def _get_previous(self, node):
    self.current = self.first
    while self.current != None:
      if self.current.next_node == node:
        return self.current
      else:
        self.current = self.current.next_node
      
  def remove_last(self):
    if self._is_empty():
      raise Exception('The Linked List is empty.')
    elif self.first == self.last:
      self.first = self.last = None
    else:
      self.previous = self._get_previous(self.last)
      self.last = self.previous
      self.last.next_node = None

    self.length -= 1
  
  def to_array(self):
    self.array = []
    self.current = self.first

    while self.current != None:
      self.array.append(self.current.value)
      self.current = self.current.next_node
    
    return self.array
