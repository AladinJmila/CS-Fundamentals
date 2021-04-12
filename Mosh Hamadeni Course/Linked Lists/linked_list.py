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


linked_list = LinkedList()
linked_list.add_last(10)
linked_list.add_last(20)
linked_list.add_last(30)
print(linked_list.first.value)
print(linked_list.first.next_node.value)
print(linked_list.last.value)
print(linked_list.last.next_node)