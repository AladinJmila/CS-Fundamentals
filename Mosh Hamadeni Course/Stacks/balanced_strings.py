class Expression():
  '''Checks various Expression properties.'''
  def __init__(self, string):
    self.string = string

  stack = []

  def is_balanced(self):
    for i in self.string:
      if i == '(':
        self.stack.append(i)
      elif i == ')':
        if not self.stack: return False
        self.stack.pop()
    return not bool(self.stack)

expression = Expression('(1 + 2)')

print(expression.is_balanced())



