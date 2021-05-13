class Array:
  items = []
  count = 0

  def __init__(self, length):
    self.items = [0 for i in range(length)]


  def insert(self, item):
    # If the array is full, resize it
    new_items = []
    if len(self.items) == self.count:
      # Create a new array (twice the size)
      new_items = [0 for i in range(self.count * 2)]

      # Copy all the existing items
      for i in range(len(self.items)):
        new_items[i] = self.items[i]

      # Set "items" to this new array
      self.items = new_items

    # Add the new item at the end
    self.items[self.count] = item
    self.count += 1


  def display(self):
    for i in range(self.count):
      print(self.items[i])


array = Array(3)

array.insert(10)
array.insert(20)
array.insert(30)
array.insert(40)
array.display()