class Expression():
  '''Checks various Expression properties.'''
  def __init__(self, string):
    self.string = string

  stack = []
  lef_brackets = '([{<'
  right_brackets = ')]}>' 

  def is_balanced(self):
    for ch in self.string:
      if ch in self.lef_brackets:
        self.stack.append(ch)

      elif ch in self.right_brackets:
        if not self.stack: return False

        top = self.stack.pop()
        if not self._brackets_match(ch, top):
          return False

    return not bool(self.stack)

  def _brackets_match(self, right, left):
    return self.lef_brackets.index(left) == self.right_brackets.index(right)
      
expression = Expression('(1 + 2) <tag>')

print(expression.is_balanced())



