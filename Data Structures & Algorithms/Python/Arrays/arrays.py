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

  def remove_at(self, index):
    # Validate the index
    if index < 0 or index >= self.count:
      raise IndexError('Index out of range.')

    # Shift the items to the left to fill the hole
    # [10, 30, 40]
    # index: 1
    # 1 <- 2
    # 2 <- 3
    for i in range(index, self.count):
      self.items[i] = self.items[i + 1] 

    self.count -= 1

  def display(self):
    for i in range(self.count):
      print(self.items[i])


array = Array(3)

array.insert(10)
array.insert(20)
array.insert(30)
array.insert(40)
array.remove_at(0)
array.display()