'''O(1)'''
def print_first_item(array):
  # O(1) Constant Growth
  print(array[0])

def print_first_item(array):
  # O(2) => O(1) Constant Growth
  print(array[0])
  print(array[0])

'''O(n)'''
def print_each_item(array):
  # O(n) linear Growth
  for item in array:
    print(item)

def print_each_item(array):
  # O(1 + n + 1) => O(2 + n) => O(n) linear Growth
  print() # O(1)
  for item in array: # O(n)
    print(item) 
  print() # O(1)

def print_each_item(array):
  # O(n + n) => O(2n) => O(n) linear Growth
  for item in array: # O(n)
    print(item) 

  for item in array: # O(n)
    print(item) 

def print_each_item(array, lista):
  # O(n + m) => O(n) linear Growth
  for item in array: # O(n)
    print(item) 

  for item in lista: # O(m)
    print(item) 

'''O(n^2)'''
def print_babouska(array):
  # O(n * n) => O(n^2) Quadratic Growth
  for first in array: # O(n)
    for second in array: # O(n)
      print(f'{first}+{second}')

def print_babouska(array):
  # O(n + n^2) => O(n^2) Quadratic Growth
  for item in array: # O(n)
    print(item)

  for first in array: # O(n)
    for second in array: # O(n)
      print(f'{first}+{second}')

def print_babouska(array):
  # O(n^3) ******* Growth
  for first in array: # O(n)
    for second in array: # O(n)
      for third in array: # O(n)
        print(f'{first}+{second}+{third}')

'''O(log n)'''
# Logarithmic Growth

'''O(2^n)'''
# Exponential Growth

'''Space Complexity'''

def greet(names):
  # O(1) space
  for name in names:
    print(f'Hi {name}')
  # O(n) space
  copy = names.copy()