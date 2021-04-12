class LinkedList():

  class Node():
    next_node = None
    def __init__(self, value):
      self.value = value
  
  first = None
  last = None

  def add_last(self, item):
    self.node = self.Node(item)
  
    if self.first == None:
      self.first = self.last = self.node
    else:
      self.last.next_node = self.node
      self.last = self.node